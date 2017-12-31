import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "mobx-react"

import App from "./App"

import registerServiceWorker from "./registerServiceWorker"
import store from "./store"

import "./index.css"

let appStore = store

function renderApp() {
  ReactDOM.render(
    <Provider {...appStore}>
      <App />
    </Provider>,
    document.getElementById("root")
  )
}

renderApp()

if (module.hot) {
  module.hot.accept(["./App"], () => {
    renderApp()
  })
}

registerServiceWorker()
