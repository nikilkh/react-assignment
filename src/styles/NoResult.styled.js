import styled from "styled-components";

export const NoResultStyle = styled.div`
  font-family: rubik;
  text-align: center;
  font-size: 32px;
  font-weight: 600;
  margin-top: 96px;
 margin: auto auto;
  width: 1440px;
  height: 1024px;

  @media only screen and (max-width: 375px) {
    width: 375px;
    height: 640px;
    margin-top: 24px;
  }
  @media only screen and (max-width: 425px) {
    width: 425px;
    height: 640px;
    margin-top: 24px;
  }
  @media only screen and (max-width: 600px) {
    width: auto;
    margin-top: 24px;
  }
  @media only screen and (max-width: 768px) {
    width: auto;
    margin-top: 28px;

  }
  @media only screen and (max-width: 1024px) {
    width: auto;
  }

  img {
    width: 620px;
    height: 447px;

    @media only screen and (max-width: 375px) {
      width: 240px;
      height: 224px;
      margin-top: 24px;
    }
    @media only screen and (max-width: 425px) {
      width: 410px;
      height: 224px;
      margin-top: 24px;
    }
    @media only screen and (max-width: 768px) {
    margin-top: 24px;

  }
    
  }
`;

export const ErrorHeadingStyle = styled.h2`
  margin-top: 0px;
  margin-bottom: 48px;

  @media only screen and (max-width: 375px) {
    font-size: 15px;
  }

  @media only screen and (max-width: 425px) {
    font-size: 20px;

  }
  @media only screen and (max-width: 768px) {
    font-size: 22px;
    

  }
`;
