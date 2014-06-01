(defproject omtris "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [compojure "1.1.5"]
                 [org.clojure/clojurescript "0.0-2173"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [goog-jar "1.0.0"]
                 [om "0.5.0"]]
  :plugins [[lein-cljsbuild "1.0.2"]
            [com.cemerick/austin "0.1.3"]
            [lein-ring "0.8.6"]]
  :source-paths ["src/clj"]
  :cljsbuild {:builds [{:id "omtris"
                        :source-paths ["src/cljs"]
                        :compiler {:output-to "resources/public/app.js"
                                   :output-dir "resources/public/out"
                                   :optimizations :none
                                   :source-map true
                                   }}]}
  :profiles {:dev {:dependencies [[ring-server "0.2.8"]]}})


