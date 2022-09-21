import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

const singleProp = {
  children: "Show more",
};

describe("Button", () => {
  it("should render content", () => {
    render(<Button {...singleProp} />);
    const buttonContent = screen.getByText("Show more");

    expect(buttonContent).toBeTruthy();
  });

  it("should call callback on button click", () => {
    const handleClickMock = jest.fn();

    render(<Button {...singleProp} handleClick={handleClickMock} />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    expect(handleClickMock).toHaveBeenCalledTimes(1);
  });
});
