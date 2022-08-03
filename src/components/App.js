import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../Main";
import BookingPage from "./BookingPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />

      <Route path="/bookingPage" element={<BookingPage />}></Route>
    </Routes>
  );
}
