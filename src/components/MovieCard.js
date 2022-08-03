import { useNavigate } from "react-router-dom";

export default function MovieCard(props) {
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
