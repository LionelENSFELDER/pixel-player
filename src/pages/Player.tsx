import { useEffect, useState } from "react";
import { fetchPlaylists } from "../adapters/spotify";
import { MainContainer, BaseContainer } from "../components/containers";
import Navbar from "../components/navbar";
import Box from "@mui/material/Box";

interface PlayerProps {
  token: string | null;
}

function Player({ token }: PlayerProps) {
  const [playlistsImages, setPlaylistsImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token) {
          const response = await fetchPlaylists(token);
          const fetchedPlaylists = response.items;

          const images = fetchedPlaylists.map((item) => item.images[0].url);
          setPlaylistsImages(images);
        }
      } catch (error) {
        console.error("Error fetching playlists:", error);
      }
    };

    fetchData();
  }, [token]);

  return (
    <MainContainer>
      <Navbar />
      <BaseContainer>
        {playlistsImages.length > 0 &&
          playlistsImages.map((item, i) => {
            return (
              <Box
                key={i}
                component="img"
                src={item}
                alt=""
                sx={{ width: "auto", height: "100px", mx: "20px" }}
              />
            );
          })}
      </BaseContainer>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {playlistsImages.length > 0 &&
          playlistsImages.map((item, i) => {
            return (
              <Box
                key={i}
                component="img"
                src={item}
                alt=""
                sx={{ width: "auto", height: "100px", mx: "20px" }}
              />
            );
          })}
      </Box>
    </MainContainer>
  );
}

export default Player;
