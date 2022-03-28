import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "~/styles/theme.style";
import App from "./App";
import MainLayout from "./layouts/MainLayout";
import reportWebVitals from "./reportWebVitals";
import store from "./store";
import "~/styles/font-face.css";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <MainLayout>
          <App />
        </MainLayout>
      </BrowserRouter>
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
