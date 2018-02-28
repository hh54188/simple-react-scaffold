import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const renderApp = function() {
  ReactDOM.render(<App />, document.querySelector("#app"));
};

renderApp();

if (module.hot) {
  module.hot.accept("./App", function() {
    renderApp();
  });
}
