import { useState, useEffect } from "react";
import Menu from "../components/menu";
import Library from "../components/library";
import Tracks from "../components/tracks";
import { getUserCurrentLibrary } from "../api/spotify";
import { PlayerProps, AvailableMenuType, LibraryObject } from "../common/types";
import { Grid } from "@mui/material";

const Player = ({ token }: PlayerProps) => {
  const [library, setLibrary] = useState<LibraryObject | null>(null);

  const [activeMenu, setActiveMenu] = useState<AvailableMenuType>("albums");
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
        const playlists = token && (await getUserCurrentLibrary(token, "playlists"));
        const albums = token && (await getUserCurrentLibrary(token, "albums"));
        const shows = token && (await getUserCurrentLibrary(token, "shows"));

        setLibrary({ trending: {}, playlists: playlists, albums: albums, shows: shows });
      } catch (error) {
        console.error("Error fetching playlists:", error);
      }
    };
    fetchData();
  }, [token]);

  return (
    <Grid sx={{ flexGrow: 1 }}>
      <Grid
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
