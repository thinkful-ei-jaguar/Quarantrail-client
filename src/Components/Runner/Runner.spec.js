import React from "react";
import ReactDOM from "react-dom";
import Runner from "./Runner";

it("Runner renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<Runner />, div);
  ReactDOM.unmountComponentAtNode(div);
});
