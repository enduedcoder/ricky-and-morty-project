import { render, screen } from "@testing-library/react";
import CharacterDetails from "./CharacterDetails";

const singleProp = {
  children: <p>Child component</p>,
};

describe("CharacterDetails", () => {
  it("should render content", () => {
    render(<CharacterDetails {...singleProp} />);

    const childContent = screen.queryByText("Child component");

    expect(childContent).toBeTruthy();
  });
});
