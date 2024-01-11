// import { init, redirectToAuthCodeFlow, getAccessToken, fetchProfile, UserProfile, populateUI } from './adapters/spotify'
import Login from './pages/Login'
import Player from './pages/Player'
import './App.css'


function App() {
  console.log(localStorage.getItem('spotifyToken'), 'app page')
  const isSpotifyToken = () => {
    const token = localStorage.getItem('spotifyToken')
    if (token !== null && token !== undefined && token !== 'undefined' && token !== 'null') {
      return true
    }
    return false
  }

  return (
    <>
      <div>
        <h1>App page with...</h1>
        {isSpotifyToken() ? <Player /> : <Login />}
      </div>
    </>
  )
}

export default App
