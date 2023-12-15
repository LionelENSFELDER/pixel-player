import { useEffect, useState, useContext } from 'react'
import { GlobalContext } from './context'
import { Link } from 'react-router-dom'
import { getTokenFromUrl } from './adapters/spotify'
import './App.css'
import Login from './pages/login'

type HashType = {
  access_token?: string | null;
  expires_in?: string | null;
  token_type?: string | null;
}

function App() {
  const appContext = useContext(GlobalContext)
  const spotifyToken = appContext.spotifyToken
  const updateSpotifyToken = appContext.updateSpotifyToken

  const [token, setToken] = useState<null | string>(null);

  useEffect(() => {
    const hash: HashType = getTokenFromUrl();
    const _token = hash !== null ? hash.access_token : null
    if (_token !== null && _token !== undefined) {
      updateSpotifyToken(_token)
      setToken(_token)
      window.location.hash = ''
    }

  }, []);


  return (
    <>
      <div>
        <h1>App</h1>
      </div>
      {token !== null ? <h1>User is logged</h1> : <Login />}
    </>
  )
}

export default App
