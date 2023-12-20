
import { useContext, useEffect } from 'react'
import { GlobalContext } from '../context'
import { init, clientId, code, getAccessToken } from '../adapters/spotify'
import Box from '@mui/material/Box';

function Login() {
  const appContext = useContext(GlobalContext)
  const spotifyToken = appContext.spotifyToken
  const updateSpotifyToken = appContext.updateSpotifyToken



  const setToken = async (code: string) => {
    const accessToken = await getAccessToken(clientId, code).then(
      (response) => {
        if (spotifyToken === '' || spotifyToken === null) {
          updateSpotifyToken(response)

        }
      }
    )
  }
  if (code) {
    setToken(code)
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
      <h1>Login with Spotify</h1>
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