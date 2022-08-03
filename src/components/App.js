import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Main from "../Main";
import BookingPage from "./BookingPage";
import MoviesContainer from "./MoviesContainer";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path=":movie" element={<MoviesContainer />}></Route>
      </Route>

      <Route path="/bookingpage" element={<BookingPage />}></Route>
    </Routes>
  );
}
