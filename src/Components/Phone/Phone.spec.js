import React from "react";
import ReactDOM from "react-dom";
import Phone from "./Phone";

it("Phone renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<Phone />, div);
  ReactDOM.unmountComponentAtNode(div);
});
