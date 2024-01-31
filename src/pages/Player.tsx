import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Menu from "../components/menu";
import { getUserCurrentLibrary } from "../api/spotify";
import Library from "../components/library";
import { PlayerProps, SelectedMenuType, LibraryObject } from "../common/types";

function Player({ token }: PlayerProps) {
  const [library, setLibrary] = useState<LibraryObject | null>(null);
  const [selectedMenu, setSelectedMenu] = useState<SelectedMenuType>("playlists");
  const handleSelectedMenu = (name: SelectedMenuType) => {
    setSelectedMenu(name);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedPlaylists = token && (await getUserCurrentLibrary(token, "playlists"));
        const fetchedAlbums = token && (await getUserCurrentLibrary(token, "albums"));
        const fetchedShows = token && (await getUserCurrentLibrary(token, "shows"));
        setLibrary({ trending: {}, playlists: fetchedPlaylists, albums: fetchedAlbums, shows: fetchedShows });
      } catch (error) {
        console.error("Error fetching playlists:", error);
      }
    };
    fetchData();
  }, [token, selectedMenu]);

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
          backgroundColor: "pink",
          width: 1,
          height: 10 / 12,
        }}
      >
        {token && library !== null && (
          <>
            <Menu handleSelectedMenu={handleSelectedMenu} />
            <Library data={library[selectedMenu]} />
            {/* <Tracks /> */}
            {/* <NowPlaying /> */}
          </>
        )}
      </Grid>
    </Grid>
  );
}

export default Player;
