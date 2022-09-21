import { GenderTypeValue, SpeciesTypeValue, StatusTypeValue } from "./constant";

export interface CharacterInfoProps {
  name: string;
  status: StatusTypeValue;
  species: SpeciesTypeValue;
  gender: GenderTypeValue;
}

const CharacterInfo = ({
  name,
  status,
  species,
  gender,
}: CharacterInfoProps): JSX.Element => {
  return (
    <div className="character-info">
      <h1 data-testid="character-name">{name}</h1>
      <p data-testid="character-status">
        <b className="sub-heading">Status :</b> {status}
      </p>
      <p data-testid="character-species">
        <b className="sub-heading">Species :</b> {species}
      </p>
      <p data-testid="character-gender">
        <b className="sub-heading">Gender :</b> {gender}
      </p>
    </div>
  );
};

export default CharacterInfo;
