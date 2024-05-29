import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CssBaseline } from "@mui/material";

const container = document.getElementById("root");
if (!container) {
  throw new Error("Failed to find the root element");
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CssBaseline />
      <div style={{ backgroundColor: "#e4f3f7", minHeight: "100vh" }}>
        <App />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
