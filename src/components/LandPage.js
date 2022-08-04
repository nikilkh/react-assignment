import {
  HeaderStyle,
  LandPageStyle,
  SearchBoxStyle,
} from "../styles/LandPage.styled";
import { useContext, useEffect } from "react";
import Context from "./context";
import MoviesContainer from "./MoviesContainer";
import NoResult from "./NoResult";
import searchIcon from "../components/searchIcon.svg";

export const LandPage = () => {
  const a = useContext(Context);

  const API_KEY = "api_key=0decbb49ed9b3d0c6017d7721a14c106";
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL =
    BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
  const searchURL = BASE_URL + "/search/movie?" + API_KEY + "&query=";

  async function getMovie(url) {
    a.setNoResult(false);
    a.setShowMovies(false);
    let result;
    let data;
    try {
      const res = await fetch(url);
      data = await res.json();
    } catch (error) {
      console.log(error);
    }
    result = data.results;

    if (result.length === 0) {
      a.setNoResult(true);
    } else {
      a.setMovies(result);
      a.setShowMovies(true);
    }
  }

  function handleSearchClick(e) {
    e.preventDefault();
    if (a.input.length === 0) {
      getMovie(API_URL);
    } else {
      getMovie(searchURL + a.input);
    }
  }

  useEffect(() => {
    getMovie(API_URL);
  }, []);

  return (
    <LandPageStyle>
      <HeaderStyle>
        <h1>Movie List</h1>
      </HeaderStyle>
      <SearchBoxStyle>
        <input
          placeholder="search your movie here"
          value={a.input}
          onChange={(e) => {
            a.setInput(e.target.value);
          }}
        ></input>
        <button
          onClick={(e) => {
            handleSearchClick(e);
          }}
        >
          <img src={searchIcon} alt="search icon"></img>
        </button>
      </SearchBoxStyle>
      {a.noResult ? <NoResult /> : <MoviesContainer />}
    </LandPageStyle>
  );
};
