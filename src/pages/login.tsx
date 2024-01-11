
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { init, clientId, code, getAccessToken } from '../adapters/spotify'
import Box from '@mui/material/Box';

function Login() {
  const navigate = useNavigate()
  console.log(localStorage.getItem('spotifyToken'), typeof localStorage.getItem('spotifyToken'))

  const isSpotifyToken = () => {
    const token = localStorage.getItem('spotifyToken')
    if (token !== null && token !== undefined && token !== 'undefined' && token !== 'null') {
      return true
    }
    return false
  }

  const setToken = async (code: string) => {
    const accessToken = await getAccessToken(clientId, code).then(
      (response) => {
        localStorage.setItem('spotifyToken', response)
        console.log(localStorage.getItem('spotifyToken'), 'login page')
      }
    )
  }

  if (code) {
    setToken(code)
  }

  useEffect(() => {
    console.log('useEffect')
    if (isSpotifyToken()) {
      navigate('/')
    }
  })



  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
      <h1>Login page</h1>
      <Box
        component='img'
        src='https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg'
        alt='Spotify logo'
        sx={{
          width: '200px',
          height: '100px',
          display: 'block'
        }}
      />
      <button onClick={() => init()}>LOGIN WITH SPOTIFY</button>
    </Box>
  )
}

export default Login