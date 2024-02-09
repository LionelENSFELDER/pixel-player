import { init } from "../api/spotify";
import { Box, Button, Grid, Typography } from "@mui/material";

function Login() {
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(src/assets/img/vinyl-pink-yellow.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h1" sx={{ fontWeight: "bold" }}>
          Pixel Player
        </Typography>
        <Box
          component="img"
          src="src\assets\img\spotify-logo-pixel.webp"
          alt="Spotify logo"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "300px",
            height: "auto",
          }}
        />
        <Button variant="contained" onClick={() => init()}>
          LOGIN WITH SPOTIFY
        </Button>
      </Grid>
    </Grid>
  );
}

export default Login;
