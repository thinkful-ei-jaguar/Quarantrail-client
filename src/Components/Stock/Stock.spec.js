import React from "react";
import ReactDOM from "react-dom";
import Stock from "./Stock";

it("Stock renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<Stock />, div);
  ReactDOM.unmountComponentAtNode(div);
});
