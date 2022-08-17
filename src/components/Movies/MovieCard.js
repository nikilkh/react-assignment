import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";

export const MovieCard = (props) => {
  let navigate = useNavigate();

  const handleBookNow = () => {
    navigate(`/book/${props.movie.id}/${props.movie.title}}`, { state: props });
  };

  return (
    <>
      <h3>{props.movie.title}</h3>
      <Button onClick={handleBookNow} buttonName="Book Now"></Button>
    </>
  );
};
