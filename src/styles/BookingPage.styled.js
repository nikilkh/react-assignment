import styled from "styled-components";
import { ButtonStyle } from "../components/Button/Button.styled";

export const BookingPageStyle = styled.div`
  width: fit-content;
  margin: auto;
  background: ${(props) =>
    props.bookingHomeVisible ? "white" : "rgba(229, 229, 229, 0.6)"};
  pointer-events: ${(props) => (props.bookingHomeVisible ? "all" : "none")};
`;

export const BookingPageFlex = styled.div`
  display: flex;
  position: relative;
  margin: auto;
  width: 1440px;
  height: 1024px;
  flex-direction: column;
  ${ButtonStyle} {
    margin: auto;
  }
`;

export const ScreenStyle = styled.div`
  margin-left: 171px;
  margin-top: 46px;
`;
export const SeatNumberStyle = styled.div`
  margin-top: 75px;
  display: flex;
  justify-content: space-between;
  margin-left: 294px;
  margin-right: 204px;
`;

export const SeatStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AllSeatsStyle = styled.div`
  margin-top: 44px;
  margin-left: 170px;
  margin-right: 187px;
`;
export const LetterSeatStyle = styled.div`
  margin-right: 66px;
`;
export const RowSeatStyle = styled.div`
  display: flex;
`;

export const ConfirmModalStyle = styled.div`
  width: 640px;
  height: 578px;
  position: absolute;
  margin: auto;
  top: 179px;
  left: 600px;
  background-color: #ffffff;
  border-radius: 20px;
  font-family: "Rubik", sans-serif;
`;

export const ModalFlexMainStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 52px;
`;

export const ModalCloseStyle = styled.div`
  display: flex;
  justify-content: end;
`;

export const ModalHeadingStyle = styled.header`
  text-align: center;
  margin: auto;

  h1 {
    font-family: "Rubik", sans-serif;
    font-size: 40px;
    margin: 0px 0px 39px 0px;
  }

  h5 {
    font-family: "Rubik", sans-serif;
    font-size: 18px;
    margin: 0px 0px 48px 0px;
  }
`;

export const ImageAndPrice = styled.div`
  display: flex;
`;

export const ModalImageStyle = styled.div`
  margin-right: 134px;

  img {
    height: 326.35px;
    width: 200px;
    border-radius: 20px;
    box-shadow: 0px 10px 20px 5px rgba(0, 0, 0, 0.25);
  }
`;
export const PriceDetailsStyle = styled.div`
  width: 100%;
  margin: auto;

  div:nth-child(2) {
    word-break: break-all;
    h1 {
      margin: auto;
    }
    h2 {
      margin: auto;
    }
  }
  div:nth-child(3) {
    display: flex;
    justify-content: space-between;
  }
  div:nth-child(4) {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
  }
  div:nth-child(5) {
    display: flex;
    justify-content: space-between;
    font-size: 12px;

    border-bottom: 2px solid black;
  }
  div:nth-child(6) {
    display: flex;
    justify-content: space-between;
  }
`;

export const CloseButtonStyle = styled.button`
  all: unset;
  font-size: large;
  cursor: pointer;
  margin-top: 5px;
  margin-right: 10px;
`;
