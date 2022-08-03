import { useContext } from "react";
import { MoviesContainerStyle, MovieStyle } from "../styles/LandPage.styled";
import Context from "./context";
import MovieCard from "./MovieCard";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

export default function MoviesContainer() {
  const a = useContext(Context);

  return (
    <MoviesContainerStyle>
      {a.showMovies ? (
        <>
          {a.movies.map((movie) => {
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
}
