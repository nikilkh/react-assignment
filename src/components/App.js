import React from "react";
import { Route, Routes } from "react-router-dom";
import { Main } from "../Main";
import {BookingPage} from "./BookingPage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />

      <Route path="/book/:id/:title" element={<BookingPage />}></Route>
    </Routes>
  );
};
