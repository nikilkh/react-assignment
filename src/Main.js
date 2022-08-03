import React, { useEffect, useState } from "react";
import Context from "./components/context";
import { LandPage } from "./components/LandPage";

export default function Main() {
  const [movies, setmovies] = useState([]);
  const [input, setinput] = useState("");
  const [showMovies, setShowMovies] = useState(true);
  const [noResult, setNoResult] = useState(false);
  const [showBooking, setShowBooking] = useState(false);

  return (
    <>
      <Context.Provider
        value={{
          movies,
          setmovies,
          input,
          setinput,
          showMovies,
          setShowMovies,
          noResult,
          setNoResult,
          showBooking,
          setShowBooking,
        }}
      >
        <LandPage />
      </Context.Provider>
    </>
  );
}
