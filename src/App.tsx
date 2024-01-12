import { useEffect, useState } from 'react'
import Login from './pages/Login'
import Player from './pages/Player'
import { isSpotifyToken, getToken } from './adapters/spotify'
import './App.css'

function App() {
  const [spotifyToken, setSpotifyToken] = useState(isSpotifyToken())

  useEffect(() => {
    const updatedToken = isSpotifyToken()
    setSpotifyToken(updatedToken)
  }, [])

  return (
    <>
      <div>
        <h1>{spotifyToken.toString()}</h1>
        {spotifyToken ? <Player token={getToken()} /> : <Login />}
      </div>
    </>
  )
}

export default App
