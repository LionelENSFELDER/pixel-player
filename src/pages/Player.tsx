import { useContext } from "react";
import { Box, Grid } from "@mui/material";
import Menu from "../components/menu";
import { GlobalContext } from "../context";
import ListView from "../components/listView";

interface PlayerProps {
  token: string | null;
}

function Player({ token }: PlayerProps) {
  const context = useContext(GlobalContext);
  const listView = context.listView;

  return (
    <Grid sx={{ flexGrow: 1 }}>
      <Grid
        spacing={1}
        id="player-container"
        sx={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          backgroundColor: "yellow",
          width: 1,
          height: 10 / 12,
          // p: 2,
        }}
      >
        <Menu />
        {token && <ListView view={listView} token={token} />}
      </Grid>
    </Grid>
  );
}

export default Player;
