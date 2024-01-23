import { Box, Grid } from "@mui/material";
import Playlists from "../components/playlists";

interface PlayerProps {
  token: string | null;
}

function Player({ token }: PlayerProps) {
  return (
    <Grid sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        id="middle-container"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          backgroundColor: "red",
          width: 1,
          p: 2,
        }}
      >
        <Playlists token={token} />
        <Box sx={{ backgroundColor: "green" }}>
          <h1>skldjfks fs jfsj fksj fsj</h1>
        </Box>
        <Box sx={{ backgroundColor: "brown" }}>
          <h1>skldjfks fs jfsj fksj fsj</h1>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Player;
