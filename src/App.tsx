import { useEffect, useState } from "react";
import Login from "./pages/login";
import Player from "./pages/player";
import { isSpotifyToken, getToken } from "./adapters/spotify";

function App() {
  const [spotifyToken, setSpotifyToken] = useState(isSpotifyToken());

  useEffect(() => {
    const updatedToken = isSpotifyToken();
    setSpotifyToken(updatedToken);
  }, []);

  return <>{spotifyToken ? <Player token={getToken()} /> : <Login />}</>;
}

export default App;
