import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import BookingPage from "./BookingPage";
import Context from "./context";

export default function MovieCard(props) {
    const a = useContext(Context);
    let navigate = useNavigate();

    function handleBookNow() {
navigate(`/book/${props.movie.id}/${props.movie.title}}`, {state: props})
    }

  return (
    <>
      <h3>{props.movie.title}</h3>
      <button onClick={handleBookNow}>Book Now</button>
    </>
  );
}
