import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import store from "./store";
import { Provider } from "react-redux";

import "./styles.css";

const RootApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<RootApp />, rootElement);
