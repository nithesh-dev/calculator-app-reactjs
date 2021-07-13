import React from 'react';
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Button from "../../components/Button"

const mockfn = jest.fn();
const props = {
  id: "+",
  onClick: mockfn,
  isDisabled: true,
};

configure({ adapter: new Adapter() });

describe("button component", () => {
  it("should trigger with correct prop", () => {
    const wrapper = shallow(
      <Button
        id={props.id}
        type="button"
        onClick={props.onClick}
        isDisabled={props.isDisabled}
      />);

    expect(wrapper.find('button').prop("id")).toBe("+");
  });
});
