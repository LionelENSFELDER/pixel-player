import { createTheme } from "@mui/material";
const LightTheme = createTheme({
  typography: {
    fontFamily: ["retrocompute", "sans-serif"].join(","),
  },
  palette: {
    mode: "light",
    primary: {
      main: "#ADB8CC",
      light: "#D0D9E5",
      dark: "#667596",
      contrastText: "#fff",
    },
    secondary: {
      main: "#75B7A4",
      light: "rgb(140, 196, 179)",
      dark: "#66ae9a",
      contrastText: "#fff",
    },
    text: {
      primary: "#6E7C9A",
      secondary: "#9CA5BB",
      disabled: "#E9F2FE",
    },
    background: {
      default: "#DFE7EF",
    },
  },
});

export default LightTheme;
