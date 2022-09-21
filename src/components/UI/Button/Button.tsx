import { ReactNode } from "react";
import "./Button.css";

interface ButtonProps {
  children: ReactNode;
  handleClick?: React.MouseEventHandler;
}

const Button = (props: ButtonProps): JSX.Element => {
  return (
    <button className="btn" onClick={props.handleClick}>
      {props.children}
    </button>
  );
};

export default Button;
