import { useState, useEffect } from "react";
import Library from "../components/library";
import Category from "../components/category";
import Tracks from "../components/tracks";
import { getUserCurrentLibrary } from "../api/spotify";
import { PlayerProps, AvailableMenuType, LibraryObject } from "../types";
import { Box, Container, Grid } from "@mui/material";
import NavBar from "../components/navbar";

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
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <NavBar />
      <Container maxWidth={false} sx={{ backgroundColor: "yellow", height: "70%" }}>
        {token && library !== null && (
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <Library handleActiveMenu={handleActiveMenu} />
            </Grid>
            <Grid item xs={3}>
              <Category activeMenu={activeMenu} data={library[activeMenu]} handleIdx={handleIdx} />
            </Grid>
            <Grid item xs={7}>
              <Tracks
                token={token}
                activeMenu={activeMenu}
                data={Object.values(library[activeMenu])[idx]}
                tracks={[]}
              />
            </Grid>
          </Grid>
        )}
      </Container>
      <Box sx={{ backgroundColor: "green", height: "50%" }}>
        <h1>Now playing...</h1>
      </Box>
    </Box>
  );
};

export default Player;
