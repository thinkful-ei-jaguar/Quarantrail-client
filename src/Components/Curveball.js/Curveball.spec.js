import React from "react";
import ReactDOM from "react-dom";
import Curveball from "./Curveball";

it("Curveball renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<Curveball />, div);
  ReactDOM.unmountComponentAtNode(div);
});
