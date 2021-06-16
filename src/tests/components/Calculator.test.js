import { fireEvent, render } from "@testing-library/react";
import Calculator from "../../components/Calculator";

describe("Calculator component", () => {
  it("should render result field correctly", () => {
    const { queryByTestId } = render(<Calculator />);

    expect(queryByTestId("result-field")).toBeTruthy();
  });

  it("should result addtion value if inputs are added", () => {
    const { queryByTestId, queryByPlaceholderText, queryByText } = render(
      <Calculator />
    );

    fireEvent.change(queryByPlaceholderText("Enter number 1"), { target: { value: "10" } });
    fireEvent.change(queryByPlaceholderText("Enter number 2"), { target: { value: "5" } });

    fireEvent.click(queryByText("+"));

    expect(queryByTestId("result-field").value).toBe("10 + 5 = 15");
  });

  it("should result subtraction value if inputs are added", () => {
    const { queryByTestId, queryByPlaceholderText, queryByText } = render(
      <Calculator />
    );

    fireEvent.change(queryByPlaceholderText("Enter number 1"), { target: { value: "10" } });
    fireEvent.change(queryByPlaceholderText("Enter number 2"), { target: { value: "5" } });


    fireEvent.click(queryByText("-"));

    expect(queryByTestId("result-field").value).toBe("10 - 5 = 5");
  });

  it("should result multiply value if inputs are added", () => {
    const { queryByTestId, queryByPlaceholderText, queryByText } = render(
      <Calculator />
    );


    fireEvent.change(queryByPlaceholderText("Enter number 1"), { target: { value: "10" } });
    fireEvent.change(queryByPlaceholderText("Enter number 2"), { target: { value: "5" } });

    fireEvent.click(queryByText("*"));

    expect(queryByTestId("result-field").value).toBe("10 * 5 = 50");
  });

  it("should result division value if inputs are added", () => {
    const { queryByTestId, queryByPlaceholderText, queryByText } = render(
      <Calculator />
    );


    fireEvent.change(queryByPlaceholderText("Enter number 1"), { target: { value: "10" } });
    fireEvent.change(queryByPlaceholderText("Enter number 2"), { target: { value: "5" } });

    fireEvent.click(queryByText("/"));

    expect(queryByTestId("result-field").value).toBe("10 / 5 = 2");
  });
});

describe("Result field", () => {
  it("should be empty when clear button is clicked", () => {
    const { queryByTestId, queryByPlaceholderText, queryByText } = render(
      <Calculator />
    );


    fireEvent.change(queryByPlaceholderText("Enter number 1"), { target: { value: "10" } });
    fireEvent.change(queryByPlaceholderText("Enter number 2"), { target: { value: "5" } });

    fireEvent.click(queryByText("+"));

    const resultField = queryByTestId("result-field");

    expect(resultField.value).toBe("10 + 5 = 15");

    fireEvent.click(queryByText("Clear"));

    expect(resultField.value).toBe("");
  });
});
