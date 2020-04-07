import React from "react";
import ReactDOM from "react-dom";
import Character from "./Character";

it("Character renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<Character />, div);
  ReactDOM.unmountComponentAtNode(div);
});
