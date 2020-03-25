import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App/App";
import { BrowserRouter } from "react-router-dom";
import { PersonProvider } from "./Context/PersonContext";
import { BooleanProvider } from "./Context/BooleanContext";

ReactDOM.render(
  <BrowserRouter>
    <PersonProvider>
      <BooleanProvider>
        <App />
      </BooleanProvider>
    </PersonProvider>
  </BrowserRouter>,
  document.getElementById("root")
);