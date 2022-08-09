import { useNavigate } from "react-router-dom";
import { BookNowButtonStyle } from "../styles/LandPage.styled";

export const MovieCard = (props) => {
  let navigate = useNavigate();

  const handleBookNow = () => {
    navigate(`/book/${props.movie.id}/${props.movie.title}}`, { state: props });
  };

  return (
    <>
      <h3>{props.movie.title}</h3>
      <BookNowButtonStyle onClick={handleBookNow}>Book Now</BookNowButtonStyle>
    </>
  );
};
