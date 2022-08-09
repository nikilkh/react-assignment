import styled from "styled-components";

export const NoResultStyle = styled.div`
  font-family: rubik;
  text-align: center;
  font-size: 32px;
  font-weight: 600;
  margin-top: 96px;
  width: 1440px;
  height: 1024px;
  border: 2px solid black;

  @media only screen and (max-width: 375px) {
    width: auto;
    margin-top: 24px;
  }
  @media only screen and (max-width: 600px) {
    width: auto;
  }
  @media only screen and (max-width: 768px) {
    width: auto;
  }
  @media only screen and (max-width: 1024px) {
    width: auto;
  }

  img {
    width: 620px;
    height: 447px;

    @media only screen and (max-width: 375px) {
      width: 200px;
      height: 200px;
    }
  }
`;

export const ErrorHeadingStyle = styled.h2`
  margin-top: 0px;
  margin-bottom: 48px;

  @media only screen and (max-width: 375px) {
    font-size: 20px;
  }
`;
