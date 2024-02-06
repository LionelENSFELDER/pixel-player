import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Menu from "../components/menu";
import { getUserCurrentLibrary } from "../api/spotify";
import Library from "../components/library";
import { PlayerProps, AvailableMenuType, LibraryObject } from "../common/types";
import Tracks from "../components/tracks";

const Player = ({ token }: PlayerProps) => {
  const [library, setLibrary] = useState<LibraryObject | null>(null);

  const [activeMenu, setActiveMenu] = useState<AvailableMenuType>("playlists");
  const handleActiveMenu = (name: AvailableMenuType) => {
    setActiveMenu(name);
  };

  const [idx, setIdx] = useState<number>(0);
  const handleIdx = (idx: number) => {
    setIdx(idx);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedPlaylists = token && (await getUserCurrentLibrary(token, "playlists"));
        const fetchedAlbums = token && (await getUserCurrentLibrary(token, "albums"));
        const fetchedShows = token && (await getUserCurrentLibrary(token, "shows"));
        console.log("fetched", fetchedPlaylists, fetchedAlbums, fetchedShows);
        setLibrary({ trending: {}, playlists: fetchedPlaylists, albums: fetchedAlbums, shows: fetchedShows });
      } catch (error) {
        console.error("Error fetching playlists:", error);
      }
    };
    fetchData();
  }, [token]);

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
            <Menu handleActiveMenu={handleActiveMenu} />
            <Library activeMenu={activeMenu} data={library[activeMenu]} handleIdx={handleIdx} />
            <Tracks token={token} activeMenu={activeMenu} data={Object.values(library[activeMenu])[idx]} />
            {/* <NowPlaying /> */}
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default Player;
