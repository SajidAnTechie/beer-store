import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";
import "react-tippy/dist/tippy.css";
import "react-loading-skeleton/dist/skeleton.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
