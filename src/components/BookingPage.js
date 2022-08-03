import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import screen from "./screen.svg";
import whiteSeat from "./whiteSeat.svg";
import greySeat from "./greySeat.svg";
import blueSeat from "./blueSeat.svg";
import {
  AllSeatsStyle,
  BookingPageStyle,
  ConfirmModalStyle,
  ModalCloseStyle,
  RowSeatStyle,
  ScreenStyle,
  SeatNumberStyle,
  SeatStyle,
  SittingSeatStyle,
} from "../styles/BookingPage.styled";
import Context from "./context";
import { GlobalStyle } from "../styles/GLobal.styled";
import ConfirmBooking from "./ConfirmBooking";

export default function BookingPage(props) {
  const IMG_URL = "https://image.tmdb.org/t/p/w500";

  const [selectedSeats, setSelectedSeats] = useState([]);
  let [confirmedSeats, setConfirmedSeats] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [bookingHomeVisible, setBookingHomeVisible] = useState(true);
  let seatsForPriceCalc = [];
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const seats = [
    {
      row: "A",
      seat: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    {
      row: "B",
      seat: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    {
      row: "C",
      seat: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    {
      row: "D",
      seat: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
  ];
  let location = useLocation();
  // console.log(typeof location.state.movie.id, typeof location.state.movie.poster_path);

  function handleSeatClick(id) {
    if (selectedSeats.includes(id)) {
      let newSelectedSeats = selectedSeats.filter((seat) => {
        return id !== seat;
      });
      setSelectedSeats(newSelectedSeats);
    } else if (selectedSeats.length < 10) {
      setSelectedSeats((selectedSeats) => [...selectedSeats, id]);
    } else alert("you can not select more than 10 seats");
  }

  function confirmBooking() {
    localStorage.setItem(location.state.movie.id, selectedSeats);
    console.log(selectedSeats.toString());
    setConfirmedSeats(
      localStorage.getItem(location.state.movie.id).split(",").join(", ")
    );
    setModalVisible(true);
    setBookingHomeVisible(false);
  }

  function closeModal() {
    setModalVisible(false);
    setBookingHomeVisible(true);
  }

  useEffect(() => {
    if (localStorage.getItem(location.state.movie.id) !== null) {
      setSelectedSeats(
        localStorage.getItem(location.state.movie.id).split(",")
      );
      setConfirmedSeats(
        localStorage.getItem(location.state.movie.id).split(",").join(",")
      );
    }
  }, []);

  console.log(location.state.movie.id);
  return (
    <>
      <BookingPageStyle
        style={
          bookingHomeVisible
            ? { background: "white" }
            : { background: "rgba(229, 229, 229, 0.6)", pointerEvents: "none" }
        }
      >
        <ScreenStyle>
          <img src={screen} />
        </ScreenStyle>

        <div style={{ margin: "auto" }}>
          <SeatNumberStyle>
            {data.map((num) => {
              return (
                <SeatStyle>
                  <h1>{num}</h1>
                </SeatStyle>
              );
            })}
          </SeatNumberStyle>
        </div>

        <AllSeatsStyle>
          {seats.map((item) => {
            return (
              <RowSeatStyle>
                <div>
                  <h1>{item.row}</h1>
                </div>
                {item.seat.map((seatNumber) => {
                  return (
                    <>
                      <SittingSeatStyle
                        onClick={() => {
                          handleSeatClick(item.row + seatNumber);
                        }}
                      >
                        {confirmedSeats.includes(item.row + seatNumber) ? (
                          <img key={item.row + seatNumber} src={greySeat} />
                        ) : selectedSeats.includes(item.row + seatNumber) ? (
                          <img key={item.row + seatNumber} src={blueSeat} />
                        ) : (
                          <img key={item.row + seatNumber} src={whiteSeat} />
                        )}
                      </SittingSeatStyle>
                    </>
                  );
                })}
              </RowSeatStyle>
            );
          })}
        </AllSeatsStyle>

        <button onClick={confirmBooking}>Confirm Booking</button>
      </BookingPageStyle>

      {modalVisible ? (
        <ConfirmBooking
          closeModal={closeModal}
          selectedSeats={selectedSeats}
          confirmedSeats={confirmedSeats}
        />
      ) : null}
    </>
  );
}
