import { render, screen, waitFor, act } from "@testing-library/react";
import CharacterEpisodes, { EpisodesDetails } from "./CharacterEpisodes";

const LIST_ITEM_SELECTOR = "listitem";
const episodeDetails: EpisodesDetails[] = [
  {
    name: "Pilot",
  },
  {
    name: "Some episode",
  },
];

const defaultProps = {
  characterEpisodes: [
    "https://rickandmortyapi.com/api/episode/1",
    "https://rickandmortyapi.com/api/episode/2",
  ],
};
const propWithOneEpisode = {
  characterEpisodes: ["https://rickandmortyapi.com/api/episode/1"],
};

describe("CharacterEpisodes", () => {
  it("renders episode lists", async () => {
    act(() => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve(episodeDetails),
        })
      ) as jest.Mock;
    });
    render(<CharacterEpisodes {...defaultProps} />);

    const listItem = await screen.findAllByRole(LIST_ITEM_SELECTOR);

    expect(listItem).toHaveLength(episodeDetails.length);
  });

  it('render "Show More Episodes" button when more than one episode is provided', async () => {
    render(<CharacterEpisodes {...defaultProps} />);

    await waitFor(() => {
      expect(screen.getByRole("button")).toBeTruthy();
    });
  });

  it('NOT render "Show More Episodes" button when one episode is provided', async () => {
    render(<CharacterEpisodes {...propWithOneEpisode} />);

    await waitFor(() => {
      expect(screen.queryByRole("button")).toBeFalsy();
    });
  });
});
