import { fireEvent, render } from "@testing-library/react";
import InputField from "../../components/InputField";

const checkDisabled = jest.fn();
const testProps = { id: "1", onChange: checkDisabled };

const renderComponent = () => {
  return render(<InputField id={testProps.id} onChange={testProps.onChange} />);
};

describe("Input value", () => {
  it("should render correctly", () => {
    const { queryByPlaceholderText } = renderComponent();
    expect(queryByPlaceholderText("Enter number " + testProps.id)).toBeTruthy();
  });

  it("update on change", () => {
    const { queryByPlaceholderText } = renderComponent();

    const inputField = queryByPlaceholderText("Enter number " + testProps.id);

    fireEvent.change(inputField, { target: { value: "123" } });

    expect(inputField.value).toBe("123");
  });

  it("should not update on change when input value is not a number", () => {
    const { queryByPlaceholderText } = renderComponent();

    const inputField = queryByPlaceholderText("Enter number " + testProps.id);

    fireEvent.change(inputField, { target: { value: "10aA" } });

    expect(inputField.value).toBe("");
  });

  it("should show error message when input value is not a number", () => {
    const { queryByPlaceholderText, queryByTestId } = renderComponent();

    const inputField = queryByPlaceholderText("Enter number " + testProps.id);

    fireEvent.change(inputField, { target: { value: "10a2bc" } });

    const errorMessage = queryByTestId("error-message");

    expect(errorMessage).toBeInTheDocument();
  });

  it("should not show error message when input value is a number", () => {
    const { queryByPlaceholderText, queryByTestId } = renderComponent();

    const inputField = queryByPlaceholderText("Enter number " + testProps.id);

    fireEvent.change(inputField, { target: { value: "100" } });

    const errorMessage = queryByTestId("error-message");

    expect(errorMessage).not.toBeInTheDocument();
  });
});
