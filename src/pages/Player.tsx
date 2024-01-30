import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Menu from "../components/menu";
import { getUserCurrent } from "../api/spotify";
import Library from "../components/library";
import { PlayerProps, SelectedMenuType, ArrayOfObject } from "../common/types";

function Player({ token }: PlayerProps) {
  const [playlists, setPlaylists] = useState<ArrayOfObject>([]);
  const [albums, setAlbums] = useState<ArrayOfObject>([]);
  const [shows, setShows] = useState<ArrayOfObject>([]);
  const [selectedMenu, setSelectedMenu] = useState<SelectedMenuType>("playlists");
  const handleSelectedMenu = (name: SelectedMenuType) => {
    setSelectedMenu(name);
  };

  const returnDataToLibrary = (): ArrayOfObject => {
    switch (selectedMenu) {
      case "trending":
        return playlists;
        break;
      case "playlists":
        return playlists;
        break;
      case "albums":
        return albums;
        break;
      case "shows":
        return shows;
        break;
      default:
        return playlists;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const playlists = token ? await getUserCurrent(token, "playlists") : [];
        const albums = token ? await getUserCurrent(token, "albums") : [];
        const shows = token ? await getUserCurrent(token, "shows") : [];
        setPlaylists(playlists);
        setAlbums(albums);
        setShows(shows);
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
        {token && (
          <>
            <Menu handleSelectedMenu={handleSelectedMenu} />
            <Library data={returnDataToLibrary()} type={selectedMenu} />
            {/* <Tracks /> */}
            {/* <NowPlaying /> */}
          </>
        )}
      </Grid>
    </Grid>
  );
}

export default Player;
