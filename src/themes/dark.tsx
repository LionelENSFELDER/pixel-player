import { createTheme } from "@mui/material";
const DarkTheme = createTheme({
  typography: {
    fontFamily: ["retrocompute", "sans-serif"].join(","),
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#006246",
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
      primary: "#FFF",
    },
    background: {
      default: "#000",
    },
  },
});

export default DarkTheme;
