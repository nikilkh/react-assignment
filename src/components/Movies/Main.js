import React, { useState } from "react";
import Context from "../context";
import { LandPage } from "./LandPage";

export const Main = () => {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState("");
  const [showMovies, setShowMovies] = useState(true);
  const [noResult, setNoResult] = useState(false);
  const [showBooking, setShowBooking] = useState(false);

  return (
    <>
      <Context.Provider
        value={{
          movies,
          setMovies,
          input,
          setInput,
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
};
