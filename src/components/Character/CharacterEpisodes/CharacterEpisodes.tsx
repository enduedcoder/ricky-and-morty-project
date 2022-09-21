import { useState, useEffect, useCallback, Fragment } from "react";
import Button from "../../UI/Button/Button";
import "./CharacterEpisodes.css";

export interface CharacterEpisodesProps {
  characterEpisodes: string[];
}

export interface EpisodesDetails {
  name: string;
}

const CharacterEpisodes = ({
  characterEpisodes,
}: CharacterEpisodesProps): JSX.Element => {
  const [episodesDetails, setEpisodesDetails] = useState<EpisodesDetails[]>();
  const [showMoreEpisodes, setShowMoreEpisodes] = useState<boolean>(false);

  const episodesCount = characterEpisodes.map((episodeUrl) => {
    let fragment = episodeUrl.split("/");
    return fragment[fragment.length - 1];
  });
  const episodes = !showMoreEpisodes
    ? episodesCount[0]
    : episodesCount.join(",");

  const getMultipleEpisodesBaseUrl = `https://rickandmortyapi.com/api/episode/${episodes}`;

  const fetchEpisodes = useCallback(async () => {
    try {
      const response = await fetch(getMultipleEpisodesBaseUrl);
      const data = await response.json();

      if (Array.isArray(data)) {
        setEpisodesDetails(data);
      } else {
        setEpisodesDetails([data]);
      }
    } catch (error) {
      console.log(`Something went wrong! ${error}`);
    }
  }, [getMultipleEpisodesBaseUrl]);

  useEffect(() => {
    fetchEpisodes();
  }, [fetchEpisodes]);

  const toggleEpisodesData = () => {
    setShowMoreEpisodes(!showMoreEpisodes);
  };

  return (
    <div className="character-episodes">
      <h3>
        <strong>Episodes</strong>
      </h3>

      <ul>
        {episodesDetails?.map((item, index) => {
          return <li key={index}>{item.name}</li>;
        })}
      </ul>

      {episodesCount.length > 1 && (
        <Fragment>
          <Button handleClick={toggleEpisodesData}>
            {!showMoreEpisodes ? " Show more episodes..." : "Show less!"}
          </Button>
        </Fragment>
      )}
    </div>
  );
};

export default CharacterEpisodes;
