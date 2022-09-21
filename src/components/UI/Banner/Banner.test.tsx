import { render, screen } from "@testing-library/react";
import Banner from "./Banner";

describe("Banner", () => {
  it("should render content", () => {
    render(<Banner />);

    const bannerContent = screen.getByText("Scroll down!");

    expect(bannerContent).toBeTruthy();
  });
});
