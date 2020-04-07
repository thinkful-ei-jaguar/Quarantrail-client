import React from "react";
import ReactDOM from "react-dom";
import SimpleGame from "./SimpleGame";

it("SimpleGame renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<SimpleGame />, div);
  ReactDOM.unmountComponentAtNode(div);
});
