import { useEffect, useState } from "react";
import Login from "./pages/login";
import Player from "./pages/player";
import { isSpotifyToken, getToken } from "./adapters/spotify";
import "./App.css";

function App() {
  const [spotifyToken, setSpotifyToken] = useState(isSpotifyToken());

  useEffect(() => {
    const updatedToken = isSpotifyToken();
    setSpotifyToken(updatedToken);
  }, []);

  return (
    <>
      <div>
        <h1>{spotifyToken.toString()}</h1>
        {spotifyToken ? <Player token={getToken()} /> : <Login />}
      </div>
    </>
  );
}

export default App;
