import { useState, useEffect } from "react";
import { TracksProps } from "../types.tsx";
import { getTracks } from "../api/spotify.tsx";
import { getValueByKey } from "../utils/getValueByKey.tsx";
import { Box, Button, Typography } from "@mui/material";

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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexGrow: 1,
        height: "100%",
        maxHeight: "80vh",
        p: 1,
        color: "text.primary",
        overflowY: "scroll",
      }}
    >
      <Typography variant="h6">Tracks</Typography>
      {tracks.map((element, idx) => {
        return (
          <Button
            key={idx}
            sx={{ color: "text.primary", display: "block" }}
            onClick={() => {
              console.log("activeMenu is : ", activeMenu, element);
            }}
          >
            <Typography>
              {element.name ? element.name : element.track.name}
            </Typography>
          </Button>
        );
      })}
    </Box>
  );
};

export default Tracks;
