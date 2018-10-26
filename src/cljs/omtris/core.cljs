(ns omtris.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.dom :as gdom]
            [goog.events :as events]
            [cljs.core.async :refer [put! chan <!]]
            [clojure.data :as data]
            [clojure.string :as string]))

(enable-console-print!)

(defn- str->piece
  [s]
  (mapv (partial mapv #(when (= \x %) :x)) s))

(def pieces
  (map str->piece
       [["xx"
         "xx"]

        [" x "
         " x "
         "xx "]

        [" x "
         " x "
         " xx"]

        [" x "
         " xx"
         " x "]

        [" x  "
         " x  "
         " x  "
         " x  "]

        ["xx "
         " xx"
         "   "]

        [" xx"
         "xx "
         "   "]]))

(defn random-piece
  []
  (rand-nth pieces))

(defn move-left
  [piece]
  (update-in piece [:point 0] dec))

(defn move-right
  [piece]
  (update-in piece [:point 0] inc))

(defn move-down
  [piece]
  (update-in piece [:point 1] inc))

(defn move-up
  [piece]
  (update-in piece [:point 1] dec))

(defn- transpose
  [grid]
  (apply mapv (comp vec reverse vector) grid))

(defn rotate-left
  [piece]
  (update-in piece [:grid] (comp transpose transpose transpose)))

(defn rotate-right
  [piece]
  (update-in piece [:grid] transpose))

(defn reserved-points
  [grid]
  (->> (map-indexed (fn [y xs]
                      (map-indexed (fn [x value]
                                     (when value
                                       [x y]))
                                   xs))
                    grid)
       (apply concat)
       (remove nil?)
       set))

(defn insert-piece
  [grid piece]
  ; FIXME: copypasta
  (let [reserved-piece-points (set (map (fn [[x y]]
                                          (let [point (:point piece)]
                                            [(+ x (first point)) (+ y (second point))]))
                                        (reserved-points (:grid piece))))]
    (reduce (fn [acc [x y]]
              (assoc-in acc [y x] :x))
            grid
            reserved-piece-points)))

(def width 16)
(def height 20)

(defn blocked?
  [grid piece]
  (let [reserved-piece-points (set (map (fn [[x y]]
                                          (let [point (:point piece)]
                                            [(+ x (first point)) (+ y (second point))]))
                                        (reserved-points (:grid piece))))]
    (or (some (partial some neg?) reserved-piece-points)
        (some (partial <= width) (map first reserved-piece-points))
        (some (partial <= height) (map second reserved-piece-points))
        (some reserved-piece-points (reserved-points grid)))))

(def indexed-seq
  (partial map-indexed vector))

(defn complete-rows
  [grid]
  (let [complete-row? (partial every? #{:x})]
    (set (map first (filter (comp complete-row? second) (indexed-seq grid))))))

(defn- vec-remove
  [coll & xs]
  (vec (map (partial get coll) (remove (set xs) (range 0 (count coll))))))

(defn initial-state
  []
  {:grid (vec (repeat height (vec (repeat width nil))))
   :piece nil})


; FIXME:
; - Perhaps split?
(defn tick
  [{:keys [piece grid] :as world}]
  (if-not piece
    (assoc world :piece {:grid (random-piece) :point [5 0]})
    (let [piece (update-in piece [:point 1] inc)]
      (if (blocked? grid piece)
        (let [grid (insert-piece grid (:piece world))
              rows (complete-rows grid)
              new-state {:grid (if (seq rows)
                                 (vec (concat (repeat (count rows) (vec (repeat width nil)))
                                              (apply vec-remove grid rows)))
                                 grid)
                         :piece {:grid (random-piece) :point [5 0]}}]
          (if (blocked? (:grid new-state) (:piece new-state))
            (assoc (initial-state) :piece {:grid (random-piece) :point [5 0]})
            new-state))
        {:grid grid
         :piece piece}))))

; FIXME: Isn't there a function for this already???
(defn piece-locs
  [{:keys [point grid]}]
  (let [[x-offset y-offset] point]
    (apply concat (keep-indexed (fn [y xs]
                                  (seq (keep-indexed (fn [x value]
                                                       (when value
                                                         [(+ y-offset y) (+ x-offset x)]))
                                                     xs)))
                                grid))))

(defn grid
  [{:keys [grid piece]}]
  (let [grid (mapv (partial mapv (fn [value]
                                   (if value
                                     :reserved
                                     nil)))
                   grid)]
    (reduce (fn [acc [x y]]
              (assoc-in acc [x y] :dynamic))
            grid
            (piece-locs piece))))

(def app-state
  (atom (initial-state)))

(defn game-view
  [app owner]
  (reify
    om/IRenderState
    (render-state [_ state]
      (let [grid (grid @app-state)]
        (dom/div #js {:id "tetris"}
                 (dom/table nil
                            (apply dom/tbody nil
                                   (map (fn [row]
                                          (apply dom/tr nil
                                                 (map (fn [value]
                                                        (dom/td #js {:className (when value (name value))} (if value " " " ")))
                                                      row)))
                                        grid))))))))

(def key-mappings
  {32 move-down
   38 rotate-right
   37 move-left
   40 move-down
   39 move-right})

(def timers
  (atom ()))

(defn timer
  [interval-atom f]
  (f)
  (swap! timers conj (.setTimeout js/window #(timer interval-atom f) @interval-atom)))

(defn lagged-timer
  [interval-atom f]
  (swap! timers conj (.setTimeout js/window #(timer interval-atom f) @interval-atom)))

(def interval-atom
  (atom 1000))

(defn get-keycode
  [evt]
  (.-keyCode evt))

(defn key-down-handler
  [evt]
  (when-let [f (key-mappings (get-keycode evt))]
    (swap! app-state (fn [{:keys [piece grid] :as state}]
                       ; TODO: Rename to `moved-piece`?
                       (let [piece (f piece)]
                         ; TODO: This could place piece at end and stop there?
                         (cond (and (not (blocked? grid piece))
                                    (= (get-keycode evt) 32)) (recur {:piece piece :grid grid})

                               ; Handles move down when already at end (places piece)
                               (and (blocked? grid piece) (= (get-keycode evt) 40))
                               (-> (update-in state [:grid] insert-piece (:piece state))
                                   (assoc :piece {:grid (random-piece) :point [5 0]}))

                               (blocked? grid piece) state

                               :else {:piece piece :grid grid})))))

  (when (= (get-keycode evt) 32)
    (doseq [t (take 10 @timers)]
      (.clearTimeout (gdom/getWindow) t))
    (timer interval-atom (fn [] (swap! app-state tick))))

  (when (= (get-keycode evt) 40)
    (doseq [t (take 10 @timers)]
      (.clearTimeout (gdom/getWindow) t))
    (lagged-timer interval-atom (fn [] (swap! app-state tick))))

  )

(defn init
  []
  (events/listen (gdom/getWindow) "keydown" key-down-handler)
  (timer interval-atom (fn []
                         (swap! app-state tick)))
  )

(om/root
  game-view
  app-state
  {:target (. js/document (getElementById "tetris"))})

(comment

  (init)

  (count (first (:grid (deref app-state))))

  (swap! app-state update :grid (comp vec (partial cons (vec (repeat 12 nil)))))

  (reset! interval-atom 500)

  (swap! app-state assoc-in [:grid 0 0] :x)

)




; $ lein repl
; (do (use 'figwheel-sidecar.repl-api) (start-figwheel!))
;
; Use :Connect to connect to the repl by hand.
;
; :Piggieback (figwheel-sidecar.repl-api/repl-env)



