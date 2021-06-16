import { fireEvent, render } from "@testing-library/react";
import React from "react";
import Operations from "../../components/Operations";

const resultFunction = jest.fn();
const testProps = {
  result: resultFunction,
  isDisabled: false,
};

const mockTestRef = React.createRef();
mockTestRef.current = "";
const fakeRef = React.createRef();
fakeRef.current = [mockTestRef, mockTestRef];

const renderComponent = () => {
  return render(
    <Operations
      ref={fakeRef}
      result={testProps.result}
      isDisabled={testProps.isDisabled}
    />
  );
};

describe("Operator component", () => {
  it("should render correctly", () => {
    const { queryByText } = renderComponent();

    expect(queryByText("-")).toBeTruthy();
  });
});

describe("should calculate result", () => {
  it("when trigger addition", () => {
    const { queryByText } = renderComponent();

    fireEvent.click(queryByText("+"));

    expect(resultFunction).toHaveBeenCalledTimes(1);
  });

  it("when trigger subtraction", () => {
    const { queryByText } = renderComponent();

    fireEvent.click(queryByText("-"));

    expect(resultFunction).toHaveBeenCalledTimes(1);
  });

  it("when trigger multiplication", () => {
    const { queryByText } = renderComponent();

    fireEvent.click(queryByText("*"));

    expect(resultFunction).toHaveBeenCalledTimes(1);
  });

  it("when trigger division", () => {
    const { queryByText } = renderComponent();

    fireEvent.click(queryByText("/"));

    expect(resultFunction).toHaveBeenCalledTimes(1);
  });
});

describe("should not calculate result if button is disabled", () => {
  it("when trigger addition", () => {
    testProps.isDisabled = true;

    const { queryByText } = renderComponent();

    fireEvent.click(queryByText("+"));

    expect(resultFunction).toHaveBeenCalledTimes(0);
  });
});
