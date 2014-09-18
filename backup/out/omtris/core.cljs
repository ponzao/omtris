(ns omtris.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [clojure.browser.repl :as repl]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.dom :as gdom]
            [goog.events :as events]
            [cljs.core.async :refer [put! chan <!]]
            [clojure.data :as data]
            [clojure.string :as string]))

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

        ["xx  "
         " xx "
         "    "]

        [" xx "
         "xx  "
         "    "]]))

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

(defn blocked?
  [grid piece]
  (let [reserved-piece-points (set (map (fn [[x y]]
                                          (let [point (:point piece)]
                                            [(+ x (first point)) (+ y (second point))]))
                                        (reserved-points (:grid piece))))]
    (or (some (partial some neg?) reserved-piece-points)
        (some (partial <= 12) (map first reserved-piece-points))
        (some (partial <= 16) (map second reserved-piece-points))
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
  {:grid (vec (repeat 16 (vec (repeat 12 nil)))) 
   :piece {:grid (random-piece) :point [5 0]}})

; FIXME:
; - Perhaps split?
(defn tick
  [{:keys [piece grid] :as world}]
  (if-not piece
    world
    (let [piece (update-in piece [:point 1] inc)]
      (if (blocked? grid piece)
        (let [grid (insert-piece grid (:piece world))
              rows (complete-rows grid)
              new-state {:grid (if (seq rows)
                                 (vec (concat (repeat (count rows) (vec (repeat 12 nil))) 
                                              (apply vec-remove grid rows)))
                                 grid)
                         :piece {:grid (random-piece) :point [5 0]}}]
          (if (blocked? (:grid new-state) (:piece new-state))
            (initial-state)
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
                 (apply dom/table nil
                        (map (fn [row]
                               (apply dom/tr nil
                                      (map (fn [value]
                                             (dom/td #js {:className (when value (name value))}))
                                           row)))
                             grid)))))))

(def key-mappings
  {73 rotate-right
   74 move-left
   75 move-down
   76 move-right})

; TODO: Separate key handler into own function
(def w (gdom/getWindow))
(events/listen w "keydown"
               (fn [evt]
                 (let [f (key-mappings evt/keyCode)]
                   (swap! app-state (fn [{:keys [piece grid] :as state}]
                                      (let [piece (f piece)]
                                        (cond (and (not (blocked? grid piece))
                                                   (= f move-down)) (recur {:piece piece :grid grid})
                                              (blocked? grid piece) state
                                              :else {:piece piece :grid grid})))))))

(.setInterval w (fn []
                  (swap! app-state tick))
              1000)

(om/root
  game-view
  app-state
  {:target (. js/document (getElementById "tetris"))})

(comment

  ; Copy this into the repl and then run `:Piggieback (browser-repl-env)`
  (defn browser-repl-env
    []
    (reset! cemerick.austin.repls/browser-repl-env
            (cemerick.austin/repl-env)))

  )

