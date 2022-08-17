import styled from "styled-components";
import { ButtonStyle } from "../components/Button/Button.styled";

export const LandPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeaderStyle = styled.header`
  h1 {
    font-family: "Roboto Mono";
    font-size: 48px;
    font-weight: 500;
  }
`;
export const SearchBoxStyle = styled.div`
  position: relative;
  input {
    width: 300px;
    height: 43px;
    text-align: left;
    padding-left: 16px;

    &:focus::placeholder {
      color: white;
    }
  }
`;

export const SearchIconButtonStyle = styled.button`
  all: unset;
  height: 50px;
  position: absolute;
  top: 0px;
  right: 0px;
  padding-left: 16px;
  padding-right: 16px;
  cursor: pointer;
`;

export const MoviesContainerStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 60px;
  margin-bottom: 60px;
  width: 1440px;
  height: max-content;
  row-gap: 48px;
  column-gap: 75px;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 600px) {
    width: auto;
  }
  @media only screen and (max-width: 768px) {
    width: auto;
  }
  @media only screen and (max-width: 1024px) {
    width: auto;
  }
`;

export const MovieStyle = styled.div`
  position: relative;
  background-repeat: no-repeat;
  height: 374px;
  width: 350px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 53.52px;
  box-shadow: 0px 10px 20px 5px rgba(0, 0, 0, 0.25);
  z-index: 0;
  background-image: url(${(props) => props.bg});
  background-size: cover;

  ${ButtonStyle} {
    display: none;
  }

  :hover:after {
    content: "";
    position: absolute;
    height: 374px;
    width: 350px;
    border-radius: 20px;
    top: 0px;
    left: 0px;
    background-color: #62626299;
    opacity: 0.8;
    z-index: 1;
  }

  h3 {
    display: none;
    color: #ffffff;
    font-family: "Rubik", sans-serif;
    font-size: 24px;
    font-weight: 600;
    margin-top: 180px;
    text-align: center;
    animation: fadeIn 0.5s;

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }

  &:hover h3 {
    display: block;
    z-index: 2;
  }

  &:hover button {
    display: block;
    z-index: 2;
  }
`;
