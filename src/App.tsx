import { useEffect, useState } from "react";
import Login from "./pages/login";
import Player from "./pages/player";
import { isSpotifyToken, getToken } from "./adapters/spotify";
import { MainContainer } from "./components/containers";
function App() {
  const [spotifyToken, setSpotifyToken] = useState(isSpotifyToken());

  useEffect(() => {
    const updatedToken = isSpotifyToken();
    setSpotifyToken(updatedToken);
  }, []);

  return (
    <MainContainer>
      {spotifyToken ? <Player token={getToken()} /> : <Login />}
    </MainContainer>
  );
}

export default App;
