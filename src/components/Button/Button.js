import React from "react";
import { ButtonStyle } from "./Button.styled";

export const Button = (props) => {
  return <ButtonStyle onClick={props.onClick}>{props.buttonName}</ButtonStyle>;
};
