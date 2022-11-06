import React from "react";
import { ButtonContainer } from "./style";

interface Props {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  text: string;
}

const Button: React.FC<Props> = (props) => {
  const { onClick, text } = props;

  return (
    <ButtonContainer onClick={onClick}>
      <p>{text}</p>
    </ButtonContainer>
  );
};

export default Button;
