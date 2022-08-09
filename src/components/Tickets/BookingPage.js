import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import screen from "../SVGs/screen.svg";
import whiteSeat from "../SVGs/whiteSeat.svg";
import greySeat from "../SVGs/greySeat.svg";
import blueSeat from "../SVGs/blueSeat.svg";
import {
  AllSeatsStyle,
  BookingPageFlex,
  BookingPageStyle,
  ConfirmBookingButtonStyle,
  LetterSeatStyle,
  RowSeatStyle,
  ScreenStyle,
  SeatNumberStyle,
  SeatStyle,
} from "../../styles/BookingPage.styled";
import { ConfirmBooking } from "./ConfirmBooking";
import { GlobalStyle } from "../../styles/Global.styled";

export const BookingPage = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  let [confirmedSeats, setConfirmedSeats] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [bookingHomeVisible, setBookingHomeVisible] = useState(true);

  const seats = {
    row: ["A", "B", "C", "D"],
    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  };
  let location = useLocation();

  const handleSeatClick = (id) => {
    if (selectedSeats.includes(id)) {
      let newSelectedSeats = selectedSeats.filter((seat) => {
        return id !== seat;
      });
      setSelectedSeats(newSelectedSeats);
    } else if (selectedSeats.length < 10) {
      setSelectedSeats([...selectedSeats, id]);
    }
  };

  const confirmBooking = () => {
    setConfirmedSeats((prevSeats) => [...prevSeats, ...selectedSeats]);
    console.log(confirmedSeats, selectedSeats);
    localStorage.setItem(
      location.state.movie.id,
      [...confirmedSeats, ...selectedSeats].join(",")
    );
    if (selectedSeats.length > 0) {
      setModalVisible(true);
      setBookingHomeVisible(false);
    } else {
      alert("select minimum 1 seat");
    }
  };

  const closeModal = () => {
    setModalVisible(false);
    setBookingHomeVisible(true);
    setSelectedSeats([]);
  };

  useEffect(() => {
    if (localStorage.getItem(location.state.movie.id)) {
      setConfirmedSeats(
        localStorage.getItem(location.state.movie.id).split(",")
      );
    }
  }, [location]);

  return (
    <>
      <GlobalStyle />
      <BookingPageStyle bookingHomeVisible={bookingHomeVisible}>
        <BookingPageFlex>
          <ScreenStyle>
            <img src={screen} alt="Screen this side" />
          </ScreenStyle>

          <SeatNumberStyle>
            {seats.data.map((num) => {
              return (
                <SeatStyle>
                  <h1>{num}</h1>
                </SeatStyle>
              );
            })}
          </SeatNumberStyle>

          <AllSeatsStyle>
            {seats.row.map((item) => {
              return (
                <RowSeatStyle>
                  <LetterSeatStyle>
                    <h1>{item}</h1>
                  </LetterSeatStyle>
                  {seats.data.map((seatNumber) => {
                    return (
                      <>
                        {confirmedSeats.includes(item + seatNumber) ? (
                          <img src={greySeat} alt="seat" />
                        ) : selectedSeats.includes(item + seatNumber) ? (
                          <img
                            onClick={() => {
                              handleSeatClick(item + seatNumber);
                            }}
                            src={blueSeat}
                            alt="seat"
                          />
                        ) : (
                          <img
                            onClick={() => {
                              handleSeatClick(item + seatNumber);
                            }}
                            src={whiteSeat}
                            alt="seat"
                          />
                        )}
                      </>
                    );
                  })}
                </RowSeatStyle>
              );
            })}
          </AllSeatsStyle>
          <ConfirmBookingButtonStyle onClick={confirmBooking}>
            Confirm Booking
          </ConfirmBookingButtonStyle>
        </BookingPageFlex>
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
};
