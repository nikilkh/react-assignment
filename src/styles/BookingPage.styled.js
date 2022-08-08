import styled from "styled-components";

export const BookingPageStyle = styled.div`
  width: 100%;
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

  button {
    margin: auto;
    margin-top: 109px;
    width: 190px;
    height: 43px;
    background-color: #352c9a;
    font-family: "Rubik", sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: white;
    cursor: pointer;

    &:active {
      text-decoration: underline;
    }

    &:disabled {
      background: #626262;
    }

    &:hover {
      background: #724fd8;
      transform: scale(0.95);
    }
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
  position: fixed;
  top: 179px;
  left: 600px;
  background-color: #ffffff;
  border-radius: 20px;
  font-family: "Rubik", sans-serif;

  h1 {
    text-align: center;
    font-family: "Rubik", sans-serif;
    font-size: 40px;
  }

  h5 {
    text-align: center;
    font-family: "Rubik", sans-serif;
    font-size: 18px;
  }
`;

export const ModalCloseStyle = styled.div`
  display: flex;
  justify-content: end;

  button {
    all: unset;
    font-size: x-large;
    cursor: pointer;
    margin-top: 5px;
    margin-right: 5px;
  }
`;

export const ModalImageStyle = styled.div`
  height: 326.35px;
  width: 200px;
  border-radius: 20px;
  margin-left: 52px;
  margin-right: 134px;

  img {
    height: 100%;
    width: auto;
    border-radius: 10px;
  }
`;
export const PriceDetailsStyle = styled.div`
  margin-right: 52px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;

  h1,
  h2 {
    display: inline;
  }

  div:nth-child(3) {
    display: flex;
    justify-content: space-between;
  }
  div:nth-child(4) {
    display: flex;
    justify-content: space-between;
  }
  div:nth-child(5) {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid black;
  }
  div:nth-child(6) {
    display: flex;
    justify-content: space-between;
  }
`;
