import styled from "styled-components";

export const ButtonStyle = styled.button`
  all: unset;
  background-color: #352c9a;
  font-family: "Rubik", sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: white;
  padding: 12px 34px;
  cursor: pointer;

  &:active {
    text-decoration: underline;
  }

  &:disabled {
    background: #626262;
  }

  &:hover {
    background: #724fd8;
  }
`;
