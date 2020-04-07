import React from "react";
import ReactDOM from "react-dom";
import FirstDay from "./FirstDay";

it("FirstDay renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<FirstDay />, div);
  ReactDOM.unmountComponentAtNode(div);
});
