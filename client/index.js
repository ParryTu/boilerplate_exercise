import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../store";
import "../public/index.css";
import AuthForm from "./components/AuthForm";

ReactDOM.render(
  <Provider store={store}>
    <AuthForm />
  </Provider>,
  document.getElementById("yourApp")
);
