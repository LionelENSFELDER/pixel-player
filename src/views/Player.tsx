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
        const playlists =
          token && (await getUserCurrentLibrary(token, "playlists"));
        const albums = token && (await getUserCurrentLibrary(token, "albums"));
        const shows = token && (await getUserCurrentLibrary(token, "shows"));

        setLibrary({
          trending: {},
          playlists: playlists,
          albums: albums,
          shows: shows,
        });
      } catch (error) {
        console.error("Error fetching playlists:", error);
      }
    };
    fetchData();
  }, [token]);

  return (
    <>
      <NavBar />
      <Container
        maxWidth={false}
        sx={{
          p: 0,
          scrollbarColor:
            "theme.palette.primary.dark theme.palette.primary.main",
        }}
      >
        {token && library !== null && library !== undefined && (
          <Grid container spacing={1} height={1}>
            <Grid item xs={4} md={1}>
              <Library handleActiveMenu={handleActiveMenu} />
            </Grid>
            <Grid item xs={4} md={2}>
              <Category
                activeMenu={activeMenu}
                data={library[activeMenu]}
                handleIdx={handleIdx}
              />
            </Grid>
            <Grid item xs={4} md={4}>
              <Tracks
                token={token}
                activeMenu={activeMenu}
                data={Object.values(library[activeMenu])[idx]}
                tracks={[]}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              display="flex"
              justifyContent="center"
              alignItems="flex-start"
            >
              <Box
                component="img"
                src="src\assets\img\turntable.png"
                alt="turntable"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "600px",
                  height: "auto",
                }}
              />
            </Grid>
          </Grid>
        )}
      </Container>
    </>
  );
};

export default Player;
