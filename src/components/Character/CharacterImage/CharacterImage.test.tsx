import { render, screen } from "@testing-library/react";
import CharacterImage, { CharacterImageProps } from "./CharacterImage";

const IMAGE_SELECTOR = "img";

const defaultProps: CharacterImageProps = {
  characterImage: "avatar.jpeg",
  characterStatus: "Alive",
};

describe("CharacterImage", () => {
  it("should render image for the character", () => {
    render(<CharacterImage {...defaultProps} />);

    const imageElement = screen.getByRole(IMAGE_SELECTOR);

    expect(imageElement).toHaveAttribute("src", defaultProps.characterImage);
  });
});
