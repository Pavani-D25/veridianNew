import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";
import theme from "./theme/theme";

const root = createRoot(document.getElementById("root"));

root.render(
  <ThemeProvider theme={theme}>
    
      <App />
    
  </ThemeProvider>
);
