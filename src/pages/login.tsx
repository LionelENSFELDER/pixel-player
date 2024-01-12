
import { init } from '../adapters/spotify'
import Box from '@mui/material/Box';

function Login() {
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