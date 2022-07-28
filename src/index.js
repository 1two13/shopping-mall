import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const GlobalStyles = createGlobalStyle`
  ${reset};
`;

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <GlobalStyles />
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
