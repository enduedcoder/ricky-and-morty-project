import { useEffect, useState, useCallback, Fragment } from 'react';
import Card from './components/UI/Card/Card';
import Banner from './components/UI/Banner/Banner';
import CharacterDetails from './components/Character/CharacterDetails/CharacterDetails';
import CharacterInfo from './components/Character/CharacterInfo/CharacterInfo';
import CharacterImage from './components/Character/CharacterImage/CharacterImage';
import CharacterLocation from './components/Character/CharacterLocation/CharacterLocation';
import CharacterEpisodes from './components/Character/CharacterEpisodes/CharacterEpisodes';
import '../src/global-css-variables/variables.css';
import './App.css';

import {
  GenderTypeValue,
  SpeciesTypeValue,
  StatusTypeValue,
} from './components/Character/CharacterInfo/constant';

export interface CharacterData {
  created: string;
  episode: string[];
  gender: GenderTypeValue;
  id: number;
  image: string;
  location: {
    name: string;
    url: string;
  };
  name: string;
  origin: {
    name: string;
    url: string;
  };
  species: SpeciesTypeValue;
  status: StatusTypeValue;
  type: string;
  url: string;
}

export interface CharacterFormatted {
  id: number;
  characterInfo: {
    name: string;
    status: StatusTypeValue;
    species: SpeciesTypeValue;
    type: string;
    gender: GenderTypeValue;
  };
  characterImage: string;
  characterLocation: {
    name: string;
    url: string;
  };
  characterEpisodes: string[];
}

const App = (): JSX.Element => {
  const [characterDetails, setCharacterDetails] =
    useState<CharacterFormatted[]>();

  const fetchCharacterDetails = useCallback(async () => {
    try {
      const response = await fetch(
        'https://rickandmortyapi.com/api/character/?page=1'
      );
      const data = await response.json();
      const results: CharacterData[] = data.results;

      const formattedData: CharacterFormatted[] = results.map(
        (item) => {
          return {
            id: item.id,
            characterInfo: {
              name: item.name,
              status: item.status,
              species: item.species,
              type: item.type,
              gender: item.gender,
            },
            characterImage: item.image,
            characterLocation: {
              name: item.location.name,
              url: item.location.url,
            },
            characterEpisodes: [...item.episode],
          };
        }
      );

      setCharacterDetails(formattedData);
    } catch (error) {
      console.log(`Something went wrong! ${error}`);
    }
  }, []);

  useEffect(() => {
    fetchCharacterDetails();
  }, [fetchCharacterDetails]);

  return (
    <Fragment>
      <Banner />
      <section>
        <div>
          {characterDetails?.map((item) => {
            return (
              <Card key={item.id}>
                <CharacterImage
                  characterImage={item.characterImage}
                  characterStatus={item.characterInfo.status}
                ></CharacterImage>

                <CharacterDetails>
                  <CharacterInfo
                    {...item.characterInfo}
                  ></CharacterInfo>

                  <CharacterLocation
                    {...item.characterLocation}
                  ></CharacterLocation>

                  <CharacterEpisodes
                    characterEpisodes={item.characterEpisodes}
                  ></CharacterEpisodes>
                </CharacterDetails>
              </Card>
            );
          })}
        </div>
      </section>
    </Fragment>
  );
};

export default App;
