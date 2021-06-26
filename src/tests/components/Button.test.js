import React from 'react';
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Button from "../../components/Button"

const mockfn = jest.fn();
const props = {
  id: "+",
  onClick: mockfn,
  isDisabled: false,
};

configure({ adapter: new Adapter() });

describe("Button component", () => {
  it("should trigger with correct props and content", () => {
    const wrapper = shallow(
      <Button
        id={props.id}
        type="button"
        onClick={props.onClick}
        isDisabled={props.isDisabled}
      />);

    expect(wrapper.find('button').prop("id")).toBe("+");
    expect(wrapper.find('button').prop("onClick")).not.toBeNull();
    expect(wrapper.find('button').prop("isDisabled")).toBeFalsy();
    expect(wrapper.find('button').prop("children")).toBe("+");
  });
});
