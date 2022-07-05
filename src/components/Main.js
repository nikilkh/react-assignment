import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from "../App";
import BookingPage from "./BookingPage";
import MoviesContainer from "./MoviesContainer";

export default function Main() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path=":movie" element={<MoviesContainer></MoviesContainer>}></Route>
        
      </Route>
      
      <Route path="/bookingpage" element={<BookingPage></BookingPage>}></Route>
    </Routes>
  );
}
