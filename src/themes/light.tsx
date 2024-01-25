import { createTheme } from "@mui/material";
const LightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#75B7A4",
      light: "rgb(140, 196, 179)",
      dark: "#66ae9a",
      contrastText: "#fff",
    },
    secondary: {
      main: "#75B7A4",
      light: "rgb(140, 196, 179)",
      dark: "#66ae9a",
      contrastText: "#fff",
    },
    text: {
      primary: "#120A15",
    },
    background: {
      default: "#FFFFFF",
    },
  },
});

export default LightTheme;
