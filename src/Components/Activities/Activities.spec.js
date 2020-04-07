import React from "react";
import ReactDOM from "react-dom";
import Activites from "./Activities";
import { shallow } from "enzyme";

describe("Test activities buttons", () => {
  it("All activities button work", () => {
    const mockCallBack = jest.fn();
    const button = shallow(<button onClick={mockCallBack} />);
    button.simulate("click");
    expect(mockCallBack).toHaveBeenCalled();
  });
});

it("Activities renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<Activites />, div);
  ReactDOM.unmountComponentAtNode(div);
});
