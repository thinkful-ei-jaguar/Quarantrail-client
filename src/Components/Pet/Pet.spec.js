import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

it("Pet renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<Pet />, div);
  ReactDOM.unmountComponentAtNode(div);
});
