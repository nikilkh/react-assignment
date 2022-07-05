import styled from "styled-components";

export const BookingPageStyle = styled.div`
  /* @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Rubik:wght@500;600&display=swap'); */

  display: flex;
position: relative;
  margin: auto;
  width: max-content;
  flex-direction: column;

  button {
    margin: auto;
    margin-top: 100px;
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
  margin: auto;
  margin-top: 46px;
`;
export const SeatNumberStyle = styled.div`
  margin-top: 75px;
  display: flex;
  justify-content: space-evenly;
  margin-left: 50px;
  column-gap: 30px;
`;

export const SeatStyle = styled.div`
  height: 80px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AllSeatsStyle = styled.div`
  margin: auto;
  margin-top: 32px;
`;

export const RowSeatStyle = styled.div`
  display: flex;
  margin: auto;
  column-gap: 30px;
`;

export const SittingSeatStyle = styled.div``;

export const ConfirmModalStyle = styled.div`
width: 640px;
height: 578px;
position: absolute;
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
`

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
`

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
`
export const PriceDetailsStyle = styled.div`
margin-right: 52px;
margin-bottom: 50px;
display: flex;
flex-direction: column;

h1, h2 {
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
`