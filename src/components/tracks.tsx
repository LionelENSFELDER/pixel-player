import { Box, Button } from "@mui/material";
import { LibraryObject, AvailableMenuType } from "../common/types.tsx";
import { useState, useEffect } from "react";
import { getTracks } from "../api/spotify.tsx";

export interface TracksProps {
  token: string;
  activeMenu: AvailableMenuType;
  data: {
    name: string;
    href: string;
    tracks: { href: string };
    show: { href: string };
    album: { tracks: { href: string } };
  };
}
const Tracks = ({ token, data, activeMenu }: TracksProps) => {
  console.log("data = ", data);
  console.log("activeMenu = ", activeMenu);
  const [tracks, setTrack] = useState<typeof data>();

  const url = () => {
    if (activeMenu === "albums") {
      return data.album.tracks.href;
    } else if (activeMenu === "shows") {
      return data.show.href;
    } else {
      return data.href;
    }
  };
  console.log(url());

  useEffect(() => {
    const fetchData = async () => {
      console.log("fetch Tracks !");
      try {
        const fetchedTracks = token && (await getTracks(token, url()));
        console.log("fetchedTracks !", fetchedTracks);
        setTrack(fetchedTracks);
      } catch (error) {
        console.error("Error fetching tracks:", error);
      }
    };
    fetchData();
  }, [token, data]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          p: 1,
          borderLef: "2px solid #FFF",
          backgroundColor: "",
          height: "100%",
        }}
      >
        <h1>Tracks view !!</h1>
        {/* {activeMenu === "albums" &&
          tracks &&
          tracks.items.map((item) => {
            return <h3>{item.track.name}</h3>;
          })} */}

        {/* {activeMenu === "shows" &&
          tracks &&
          tracks.items.map((item) => {
            return <h3>{item.track.name}</h3>;
          })} */}

        {/* {activeMenu === "playlists" &&
          tracks &&
          tracks.items.map((item) => {
            return <h3>{item.track.name}</h3>;
          })} */}

        {/* {tracks &&
          tracks.items.map((item) => {
            return <h3>{item.track.name}</h3>;
          })} */}
      </Box>
    </>
  );
};

export default Tracks;
