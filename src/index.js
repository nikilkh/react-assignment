import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import { GlobalStyle } from "./styles/GLobal.styled";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Router>
      <GlobalStyle />

      <App />
    </Router>
  </>
);
