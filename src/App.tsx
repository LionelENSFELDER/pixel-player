// import { init, redirectToAuthCodeFlow, getAccessToken, fetchProfile, UserProfile, populateUI } from './adapters/spotify'
import Login from './pages/Login'
import Player from './pages/Player'
import './App.css'


function App() {
  const spotifyToken = localStorage.getItem('spotifyToken')

  return (
    <>
      <div>
        <h1>App</h1>
        {spotifyToken !== null && spotifyToken !== 'undefined' && spotifyToken !== undefined ? <Player /> : <Login />}
      </div>
    </>
  )
}

export default App
