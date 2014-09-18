(ns omtris.core
  (:require [compojure.handler :as handler]
            [compojure.core :refer [defroutes routes GET POST PUT DELETE]]
            [compojure.route :as route]
            [cemerick.austin.repls :refer (browser-connected-repl-js)]
            ))

(defroutes app-routes
  (GET "/repl.js" []
    (browser-connected-repl-js))
  (route/resources "/"))

(comment

  (require '[ring.server.standalone :refer (serve)])

  (def handler
    (-> #'app-routes
        handler/api
        ))

  (def server (serve #'handler {:auto-reload? false
                                :open-browser? false}))


  )

