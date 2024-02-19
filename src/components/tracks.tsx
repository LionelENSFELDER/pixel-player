import { useState, useEffect } from "react";
import { TracksProps } from "../types.tsx";
import { getTracks } from "../api/spotify.tsx";
import { getValueByKey } from "../utils/getValueByKey.tsx";
import { Box, Button } from "@mui/material";

const Tracks = ({ token, data, activeMenu }: TracksProps) => {
  if (!data) {
    throw new Error("No data passed !");
  }

  const [tracks, setTrack] = useState<any[]>([]);

  useEffect(() => {
    fetchTracks();
  }, [token, data, activeMenu]);

  const fetchTracks = async () => {
    try {
      const fullTracksObj =
        token && (await getTracks(token, returnTracksUrl()));
      if (!fullTracksObj) {
        throw new Error("Erro when fetch tracks !");
      } else {
        setTrack(getValueByKey(fullTracksObj, "items"));
      }
    } catch (error) {
      console.error("Error fetching tracks:", error);
    }
  };

  const returnTracksUrl = () => {
    switch (activeMenu) {
      case "albums":
        return data.album.href;
        break;
      case "shows":
        return data.show.href + "/episodes";
        break;
      case "playlists":
        return data.tracks.href;
        break;
      default:
        return data.href;
        break;
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexGrow: 1,
          height: "100vh",
          p: 1,
          color: "text.primary",
          overflowY: "scroll",
        }}
      >
        <h2>Tracks</h2>

        {tracks.map((element, idx) => {
          console.log(element);
          return (
            <Button
              key={idx}
              sx={{ color: "text.primary", display: "block" }}
              onClick={() => console.log(element)}
            >
              <Box>{element.name}</Box>
              {/* <Box> by {element.artists[0].name}</Box> */}
            </Button>
          );
          // if (element.track) {
          //   return <span key={idx}>{element.track.name}</span>;
          // }
          // return <span key={idx}>{element.name}</span>;
        })}
      </Box>
    </>
  );
};

export default Tracks;
