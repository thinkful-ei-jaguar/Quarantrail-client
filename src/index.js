import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App/App";
import { BrowserRouter } from "react-router-dom";
import { PersonProvider } from "./Context/PersonContext";

ReactDOM.render(
  <BrowserRouter>
    <PersonProvider>
      <App />
    </PersonProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
