import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../context";
import { fetchPlaylists } from "../adapters/spotify";
import { Box, Button } from "@mui/material";
import { fetchPlaylistItems } from "../adapters/spotify";

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
  const [userPlaylists, setUserPlaylists] = useState<{ name: string; href: string; id: string }[]>([]);
  const context = useContext(GlobalContext);
  const setPlaylistTracks = context.updatePlaylistTracks;

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

  const fetchPlaylistTracks = async (token: string, id: string) => {
    if (token) {
      try {
        const response = await fetchPlaylistItems(token, id);
        // console.log(response);
        const playlistTracks = response.items;
        setPlaylistTracks(playlistTracks);
        console.log(playlistTracks);
      } catch (error) {
        console.error("Error fetching playlist tracks:", error);
      }
    }
  };

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
          token &&
          userPlaylists.map((item, i) => {
            return (
              <Button key={i} onClick={() => fetchPlaylistTracks(token, item.id)}>
                {item.name}
              </Button>
            );
          })}
      </Box>
    </Box>
  );
};
export default Playlists;
