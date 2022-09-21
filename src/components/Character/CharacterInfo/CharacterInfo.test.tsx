import { render, screen, waitFor } from "@testing-library/react";
import CharacterInfo, { CharacterInfoProps } from "./CharacterInfo";

const TEST_ID_CHARACTER_NAME = "character-name";
const TEST_ID_CHARACTER_STATUS = "character-status";
const TEST_ID_CHARACTER_SPECIES = "character-species";
const TEST_ID_CHARACTER_GENDER = "character-gender";

const defaultProps: CharacterInfoProps = {
  name: "rick",
  status: "Alive",
  species: "Human",
  gender: "male",
};

describe("CharacterInfo", () => {
  it("should render character name", async () => {
    render(<CharacterInfo {...defaultProps} />);

    const characterName = screen.getByTestId(TEST_ID_CHARACTER_NAME);

    await waitFor(() => {
      expect(characterName.innerHTML).toContain(defaultProps.name);
    });
  });

  it("should render character status", async () => {
    render(<CharacterInfo {...defaultProps} />);

    const characterStatus = screen.getByTestId(TEST_ID_CHARACTER_STATUS);

    await waitFor(() => {
      expect(characterStatus.innerHTML).toContain(defaultProps.status);
    });
  });

  it("should render character species", async () => {
    render(<CharacterInfo {...defaultProps} />);

    const characterSpecies = screen.getByTestId(TEST_ID_CHARACTER_SPECIES);

    await waitFor(() => {
      expect(characterSpecies.innerHTML).toContain(defaultProps.species);
    });
  });

  it("should render character gender", async () => {
    render(<CharacterInfo {...defaultProps} />);

    const characterGender = screen.getByTestId(TEST_ID_CHARACTER_GENDER);

    await waitFor(() => {
      expect(characterGender.innerHTML).toContain(defaultProps.gender);
    });
  });
});
