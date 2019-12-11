import React from "react";
import ReactDOM from "react-dom";

import { AppStore } from "./state";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <AppStore>
    <App />
  </AppStore>,
  document.getElementById("root")
);
