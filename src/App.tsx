import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "./context";
import Player from "./views/Player.tsx";
import Login from "./views/login.tsx";
import { isSpotifyToken, getToken } from "./api/spotify.tsx";
import { ThemeProvider } from "@mui/material";

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
      {spotifyToken ? <Player token={getToken()} /> : <Login />}
    </ThemeProvider>
  );
}

export default App;
