import { createTheme } from "@mui/material";
const DarkTheme = createTheme({
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
  },
});

export default DarkTheme;
