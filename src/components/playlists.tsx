import { useEffect } from "react";
import { getUserCurrent } from "../api/spotify";
import { Box } from "@mui/material";
import { PlaylistsProps } from "../common/types";

const Playlists = ({ token }: PlaylistsProps) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const playlists = token ? await getUserCurrent(token, "playlists") : [];
        const albums = token ? await getUserCurrent(token, "albums") : [];
        const shows = token ? await getUserCurrent(token, "shows") : [];
        console.log("playlists", playlists);
        console.log("albums", albums);
        console.log("shows", shows);
      } catch (error) {
        console.error("Error fetching playlists:", error);
      }
    };
    fetchData();
  }, [token]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       if (token) {
  //         const response = await fetchPlaylists(token);
  //         const playlists = response.items;
  //         const playlistsInfos = playlists.map((item: { name: string; href: string }) => item);
  //         // setPlaylists(playlistsInfos);
  //         console.log("userPlaylists", playlists);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching playlists:", error);
  //     }
  //   };

  //   fetchData();
  // }, [token]);

  // const fetchPlaylistTracks = async (token: string, id: string) => {
  //   if (token) {
  //     try {
  //       const response = await fetchPlaylistTracks(token, id);
  //       // console.log(response);
  //       const playlistTracks = response.items;
  //       setPlaylistTracks(playlistTracks);
  //       console.log(playlistTracks);
  //     } catch (error) {
  //       console.error("Error fetching playlist tracks:", error);
  //     }
  //   }
  // };

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
          backgroundColor: "",
        }}
      >
        {/* {playlists.length > 0 &&
          token &&
          playlists.map((item, i) => {
            return (
              <Button key={i} onClick={() => fetchPlaylistTracks(token, item.id)}>
                {item.name}
              </Button>
            );
          })} */}
      </Box>
    </Box>
  );
};
export default Playlists;
