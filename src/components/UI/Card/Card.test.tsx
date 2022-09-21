import { render, screen } from "@testing-library/react";
import Card from "./Card";

const singleProp = {
  children: <p>Child component</p>,
};

describe("Card", () => {
  it("should render content", () => {
    render(<Card {...singleProp} />);

    const childContent = screen.queryByText("Child component");

    expect(childContent).toBeTruthy();
  });
});
