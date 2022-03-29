import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "~/styles/theme.style";
import App from "./App";
import MainLayout from "./layouts/MainLayout";
import "~/styles/font-face.css";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <MainLayout>
        <App />
      </MainLayout>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root")
);
