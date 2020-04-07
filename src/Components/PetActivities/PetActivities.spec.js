import React from "react";
import ReactDOM from "react-dom";
import PetActivities from "./PetActivities";

it("PetActivities renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<PetActivities />, div);
  ReactDOM.unmountComponentAtNode(div);
});
