import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import App from "./App";

describe(`App component`, () => {
  it("renders by default", () => {
    const wrapper = shallow(<App />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

it("App renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
