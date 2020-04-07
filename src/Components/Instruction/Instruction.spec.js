import React from "react";
import ReactDOM from "react-dom";
import Instruction from "./Instruction";

it("Instruction renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<Instruction />, div);
  ReactDOM.unmountComponentAtNode(div);
});
