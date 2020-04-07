import React from "react";
import ReactDOM from "react-dom";
import StatusBar from "./StatusBar";

it("StatusBar renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<StatusBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
