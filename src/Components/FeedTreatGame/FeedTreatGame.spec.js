import React from "react";
import ReactDOM from "react-dom";
import FeedTreatGame from "./FeedTreatGame";

it("FeedTreatGame renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<FeedTreatGame />, div);
  ReactDOM.unmountComponentAtNode(div);
});
