import React from "react";
import ReactDOM from "react-dom";
import TV from "./TV";

it("TV renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<TV />, div);
  ReactDOM.unmountComponentAtNode(div);
});
