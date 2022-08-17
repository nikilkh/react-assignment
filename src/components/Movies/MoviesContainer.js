import { useContext } from "react";
import { MoviesContainerStyle, MovieStyle } from "../../styles/LandPage.styled";
import Context from "../context";
import {MovieCard} from "./MovieCard";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

export const MoviesContainer = () => {
  const states = useContext(Context);

  return (
    <MoviesContainerStyle>
      {states.showMovies ? (
        <>
          {states.movies.map((movie) => {
            return (
              <>
                <MovieStyle bg={IMG_URL + movie.poster_path}>
                  <MovieCard movie={movie} />
                </MovieStyle>
              </>
            );
          })}
        </>
      ) : (
        <h3>loading...</h3>
      )}
    </MoviesContainerStyle>
  );
};
