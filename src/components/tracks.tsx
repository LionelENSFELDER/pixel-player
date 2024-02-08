import { Box } from "@mui/material";
import { AvailableMenuType } from "../common/types.tsx";
import { useState, useEffect } from "react";
import { getTracks } from "../api/spotify.tsx";
import { getValueByKey } from "../common/utils.tsx";

interface dataInterface {
  added_at: string;
  name: string;
  href: string;
  tracks: {
    href: string;
    total: string;
    name: string;
  };
  album: {
    href: string;
  };
  show: {
    href: string;
  };
  track: {
    name: string;
  };
}

export interface TracksProps {
  token: string;
  activeMenu: AvailableMenuType;
  data: dataInterface;
}
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
      const fullTracksObj = token && (await getTracks(token, returnTracksUrl()));
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
          p: 1,
          borderLef: "2px solid #FFF",
          backgroundColor: "",
          height: "100%",
        }}
      >
        <h1>Tracks view !!</h1>

        {tracks.map((el, idx) => {
          if (activeMenu === "playlists" && el.track) {
            return <span key={idx}>{el.track.name}</span>;
          }
          return <span key={idx}>{el.name}</span>;
        })}
      </Box>
    </>
  );
};

export default Tracks;
