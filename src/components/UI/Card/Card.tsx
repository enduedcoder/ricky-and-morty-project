import { ReactNode } from "react";
import "./Card.css";

interface CardProps {
  children: ReactNode;
}

const Card = (props: CardProps): JSX.Element => {
  return <div className="card">{props.children}</div>;
};

export default Card;
