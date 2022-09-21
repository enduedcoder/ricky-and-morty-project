import { ReactNode } from "react";
import "./CharacterDetails.css";

interface CharacterDetailsProps {
  children: ReactNode;
}

const CharacterDetails = (props: CharacterDetailsProps): JSX.Element => {
  return <div className="character-details">{props.children}</div>;
};

export default CharacterDetails;
