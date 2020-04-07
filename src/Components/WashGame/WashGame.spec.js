import React from "react";
import ReactDOM from "react-dom";
import WashGame from "./WashGame";

it("WashGame renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<WashGame />, div);
  ReactDOM.unmountComponentAtNode(div);
});
