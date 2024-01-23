import { useEffect, useState } from "react";
import { fetchPlaylists } from "../adapters/spotify";
import { Box } from "@mui/material";

interface FetchedPlaylistsImage {
  height: string;
  url: string;
  width: string;
}

interface FetchedPlaylists {
  images: FetchedPlaylistsImage[];
}

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

          const images = fetchedPlaylists.map((item: FetchedPlaylists) => item.images[0].url);
          setPlaylistsImages(images);
        }
      } catch (error) {
        console.error("Error fetching playlists:", error);
      }
    };

    fetchData();
  }, [token]);

  return (
    <Box
      sx={{
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        p: 1,
        border: "2px solid #FFF",
        borderRadius: 3,
        backgroundColor: "#75B7A4",
        width: 1,
      }}
    >
      {playlistsImages.length > 0 &&
        playlistsImages.map((item, i) => {
          return <Box key={i} component="img" src={item} alt="" sx={{ width: 100, height: "auto", mx: 2 }} />;
        })}
    </Box>
  );
}

export default Player;
