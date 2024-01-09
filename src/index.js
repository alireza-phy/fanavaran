import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.js";
import "./style.css";
import store from "./redux/store.js";
// Create a React root using ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the application inside the root
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
