import { fireEvent, render } from "@testing-library/react";
import Calculator from "../../components/Calculator";

const assignValueToInputs = (queryByPlaceholderText, input1, input2) => {
    fireEvent.change(queryByPlaceholderText("Enter number 1"), { target: { value: input1 } });
    fireEvent.change(queryByPlaceholderText("Enter number 2"), { target: { value: input2 } });
}

describe("Calculator component", () => {
  it("should render result field correctly", () => {
    const { queryByTestId } = render(<Calculator />);

    expect(queryByTestId("result-field")).toBeTruthy();
  });

  it("should result addtion value if inputs are added", () => {
    const { queryByTestId, queryByPlaceholderText, queryByText } = render(
      <Calculator />
    );

    assignValueToInputs(queryByPlaceholderText, "10", "5");

    fireEvent.click(queryByText("+"));

    expect(queryByTestId("result-field").value).toBe("10 + 5 = 15");
  });

  it("should result subtraction value if inputs are added", () => {
    const { queryByTestId, queryByPlaceholderText, queryByText } = render(
      <Calculator />
    );


    assignValueToInputs(queryByPlaceholderText, "10", "5");


    fireEvent.click(queryByText("-"));

    expect(queryByTestId("result-field").value).toBe("10 - 5 = 5");
  });

  it("should result multiply value if inputs are added", () => {
    const { queryByTestId, queryByPlaceholderText, queryByText } = render(
      <Calculator />
    );


    assignValueToInputs(queryByPlaceholderText, "10", "5");

    fireEvent.click(queryByText("*"));

    expect(queryByTestId("result-field").value).toBe("10 * 5 = 50");
  });

  it("should result division value if inputs are added", () => {
    const { queryByTestId, queryByPlaceholderText, queryByText } = render(
      <Calculator />
    );


    assignValueToInputs(queryByPlaceholderText, "10", "5");

    fireEvent.click(queryByText("/"));

    expect(queryByTestId("result-field").value).toBe("10 / 5 = 2");
  });

  it("should disable operator button if inputs are empty", () => {
    const {queryByPlaceholderText, queryByText } = render(
      <Calculator />
    );

    fireEvent.change(queryByPlaceholderText("Enter number 1"), { target: { value: "" } });
    fireEvent.change(queryByPlaceholderText("Enter number 2"), { target: { value: "" } });
    
    expect(queryByText("+").disabled).toBe(true);
  });

  it("should update result value if operator is changed", () => {
    const { queryByTestId, queryByPlaceholderText, queryByText } = render(
      <Calculator />
    );

    assignValueToInputs(queryByPlaceholderText, "10", "5");

    fireEvent.click(queryByText("+"));

    expect(queryByTestId("result-field").value).toBe("10 + 5 = 15");

    fireEvent.click(queryByText("/"));

    expect(queryByTestId("result-field").value).toBe("10 / 5 = 2");

  });

});

describe("Result field", () => {
  it("should be empty when clear button is clicked", () => {
    const { queryByTestId, queryByPlaceholderText, queryByText } = render(
      <Calculator />
    );

    assignValueToInputs(queryByPlaceholderText, "10", "5");

    fireEvent.click(queryByText("+"));

    const resultField = queryByTestId("result-field");

    fireEvent.click(queryByText("Clear"));

    expect(resultField.value).toBe("");
  });

 describe("Clear field", () => {
   it("should be disabled when result field is empty", () => {
    const { queryByTestId, queryByText } = render(
      <Calculator />
    );

    fireEvent.change(queryByTestId("result-field"), { target: { value: "" } });

    expect(queryByText("Clear").disabled).toBe(true);
   })

   it("should not be disabled when result field is not empty", () => {
    const { queryByPlaceholderText, queryByText } = render(
      <Calculator />
    );

    assignValueToInputs(queryByPlaceholderText, "10", "5");

    fireEvent.click(queryByText("+"));

    expect(queryByText("Clear").disabled).toBe(false);
   })
 })
});
