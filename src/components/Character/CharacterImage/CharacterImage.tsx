import { StatusTypeValue } from "../CharacterInfo/constant";
import "./CharacterImage.css";

export interface CharacterImageProps {
  characterStatus: StatusTypeValue;
  characterImage: string;
}

const CharacterImage = ({
  characterStatus,
  characterImage,
}: CharacterImageProps): JSX.Element => {
  const classes = `character-image ${
    characterStatus === "Alive"
      ? "alive"
      : characterStatus === "Dead"
      ? "dead"
      : "unknown"
  }`;

  return (
    <div className={classes}>
      <img src={characterImage} width="100" alt="character"></img>
    </div>
  );
};

export default CharacterImage;
