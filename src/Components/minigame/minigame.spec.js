import React from "react";
import ReactDOM from "react-dom";
import BestGameEver from "./minigame";

it("minigame renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<BestGameEver />, div);
  ReactDOM.unmountComponentAtNode(div);
});
