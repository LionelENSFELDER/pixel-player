import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "./context";
import Login from "./pages/login";
import Player from "./pages/Player";
import { isSpotifyToken, getToken } from "./adapters/spotify";
import { MainContainer } from "./components/containers";
import LightTheme from "./themes/light.tsx";
import DarkTheme from "./themes/dark.tsx";

function App() {
  const [spotifyToken, setSpotifyToken] = useState(isSpotifyToken());
  const context = useContext(GlobalContext);
  const colorMode = context.colorMode;

  useEffect(() => {
    const updatedToken = isSpotifyToken();
    setSpotifyToken(updatedToken);
  }, []);

  return (
    <ThemeProvider theme={colorMode === "light" ? LightTheme : DarkTheme}>
      <CssBaseline />
      <MainContainer>{spotifyToken ? <Player token={getToken()} /> : <Login />}</MainContainer>
    </ThemeProvider>
  );
}

export default App;
