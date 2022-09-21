import { render, screen, waitFor } from "@testing-library/react";
import CharacterLocation, {
  CharacterLocationProps,
  LocationDetails,
} from "./CharacterLocation";

const TEST_ID_LOCATION_NAME = "location-name";
const TEST_ID_LOCATION_TYPE = "location-type";
const TEST_ID_LOCATION_DIMENSION = "location-dimension";
const TEST_ID_LOCATION_RESIDENTS = "location-residents";

const locationDetails: LocationDetails = {
  name: "Earth",
  type: "Planet",
  dimension: "Dimension C-137",
  residents: [
    "https://rickandmortyapi.com/api/character/1",
    "https://rickandmortyapi.com/api/character/2",
  ],
};

const defaultProps: CharacterLocationProps = {
  url: "some url",
};

describe("CharacterLocation", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(locationDetails),
      })
    ) as jest.Mock;
  });

  test("renders location name", async () => {
    render(<CharacterLocation {...defaultProps} />);
    const locationName = screen.getByTestId(TEST_ID_LOCATION_NAME);

    await waitFor(() => {
      expect(locationName.innerHTML).toContain(locationDetails.name);
    });
  });

  test("renders location type", async () => {
    render(<CharacterLocation {...defaultProps} />);
    const locationType = screen.getByTestId(TEST_ID_LOCATION_TYPE);

    await waitFor(() => {
      expect(locationType.innerHTML).toContain(locationDetails.type);
    });
  });

  test("renders location dimension", async () => {
    render(<CharacterLocation {...defaultProps} />);
    const locationDimension = screen.getByTestId(TEST_ID_LOCATION_DIMENSION);

    await waitFor(() => {
      expect(locationDimension.innerHTML).toContain(locationDetails.dimension);
    });
  });

  test("renders location total residents", async () => {
    render(<CharacterLocation {...defaultProps} />);
    const locationResidentsCount = screen.getByTestId(
      TEST_ID_LOCATION_RESIDENTS
    );

    await waitFor(() => {
      expect(locationResidentsCount.innerHTML).toContain(
        locationDetails.residents?.length.toString()
      );
    });
  });
});
