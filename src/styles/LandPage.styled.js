import styled from "styled-components";

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
  button {
    all: unset;
    height: 50px;
    position: absolute;
    top: 0px;
    right: 0px;
    margin-right: 5px;
    cursor: pointer;
  }
`;

export const MoviesContainerStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 60px;
  margin-bottom: 60px;
  width: 90%;
  height: max-content;
  row-gap: 48px;
  column-gap: 75px;
  justify-content: center;
  align-items: center;
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
  box-shadow: 10px 10px 20px #888888;
  z-index: 0;
  background-image: url(${(props) => props.bg});
  background-size: cover;

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

  button {
    all: unset;
    display: none;
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
