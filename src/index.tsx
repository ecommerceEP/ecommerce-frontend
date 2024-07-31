import React from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

const container = document.getElementById("root");
if (!container) {
  throw new Error("Failed to find the root element");
}

const root = createRoot(container);
export const theme = createTheme({
  palette: {
    primary: {
      main: "#ffff",
      light: "#3399ff",
      dark: "#0056b3",
      contrastText: "#fff",
    },
    background: {
      default: "#f0f2f5",
      paper: "#fff",
    },
    text: {
      primary: "#000",
      secondary: "#FFFF",
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
    },
  },
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
