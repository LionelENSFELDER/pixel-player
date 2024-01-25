import { useEffect, useState } from "react";
import { fetchPlaylists } from "../adapters/spotify";
import { Box, Typography } from "@mui/material";

interface PlaylistsProps {
  token: string | null;
}

// interface FetchedPlaylistsImage {
//   height: string;
//   url: string;
//   width: string;
// }

// interface FetchedPlaylists {
//   images: FetchedPlaylistsImage[];
// }

const Playlists = ({ token }: PlaylistsProps) => {
  const [userPlaylists, setUserPlaylists] = useState<{ name: string; href: string }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token) {
          const response = await fetchPlaylists(token);
          const userPlaylists = response.items;
          const playlistsInfos = userPlaylists.map((item: { name: string; href: string }) => item);
          setUserPlaylists(playlistsInfos);
          console.log("userPlaylists", userPlaylists);
        }
      } catch (error) {
        console.error("Error fetching playlists:", error);
      }
    };

    fetchData();
  }, [token]);

  return (
    <Box sx={{ backgroundColor: "yellow" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          p: 1,
          borderLeft: "2px solid #F3F3F3",
          borderRadius: 3,
          backgroundColor: "primary.main",
        }}
      >
        {userPlaylists.length > 0 &&
          userPlaylists.map((item, i) => {
            return <Typography key={i}>{item.name}</Typography>;
          })}
      </Box>
    </Box>
  );
};
export default Playlists;
