import { useLocation } from "react-router-dom";
import {
  ConfirmModalStyle,
  ModalCloseStyle,
  ModalImageStyle,
  PriceDetailsStyle,
} from "../styles/BookingPage.styled";

export default function ConfirmBooking(props) {
  const IMG_URL = "https://image.tmdb.org/t/p/w500";
  let location = useLocation();

  return (
    <ConfirmModalStyle>
      <ModalCloseStyle>
        <button onClick={props.closeModal}>X</button>
      </ModalCloseStyle>
      <h1>Thank you for booking</h1>
      <h5>Order summary</h5>

      <div style={{ display: "flex" }}>
        <ModalImageStyle>
          <img
            src={IMG_URL + location.state.movie.poster_path}
          ></img>
        </ModalImageStyle>

        <PriceDetailsStyle>
          <h3>Seats:</h3>
          <div>
            {props.selectedSeats.length <= 3 ? (
              <h1>{props.confirmedSeats}</h1>
            ) : (
              <h2>{props.confirmedSeats}</h2>
            )}
          </div>

          <div>
            <h5>
              {props.selectedSeats.length} * {250}:
            </h5>
            <h5>{props.selectedSeats.length * 250}</h5>
          </div>

          <div>
            <p>SGST(12%):</p>
            <p>{(12 * (props.selectedSeats.length * 250)) / 100}</p>
          </div>

          <div>
            <p>CGST(12%):</p>
            <p>{(12 * (props.selectedSeats.length * 250)) / 100}</p>
          </div>

          <div>
            <h5>Total:</h5>
            <h5>
              {props.selectedSeats.length * 250 +
                ((12 * (props.selectedSeats.length * 250)) / 100) * 2}
            </h5>
          </div>
        </PriceDetailsStyle>
      </div>
    </ConfirmModalStyle>
  );
}
