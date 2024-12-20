import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#009065", 
      dark: "#006547", 
      light: "#D9EFE9", 
    },
    secondary: {
      main: "#ffffff",
      

    },
    background: {
      default: "#ffffff", 
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif", 
    h6: {
      fontWeight: 600, 
      textTransform: "uppercase", 
    },
    body1: {
      fontSize: "16px", 
    },
  },
});

export default theme;
