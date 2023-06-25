import { ThemeProvider } from "@emotion/react";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import "./index.css";
import theme from "./theme/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
