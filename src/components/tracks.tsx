import { useState, useEffect } from "react";
import { TracksProps } from "../types.tsx";
import { getTracks } from "../api/spotify.tsx";
import { getValueByKey } from "../utils/getValueByKey.tsx";
import { Box } from "@mui/material";

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
    <div className="w-96 bg-white dark:bg-black flex flex-col justify-top items-center overflow-visible">
      <h2 className="text-black dark:text-white">tracks</h2>
      {tracks.map((el, idx) => {
        if (el.track) {
          return (
            <button
              key={idx}
              className="border-0 bg-transparent font-large text-lg px-5 py-2.5 text-center inline-flex items-center me-2 mb-0.5 text-black dark:text-white"
            >
              {el.track.name}
            </button>
          );
        }
        return (
          <button
            className="border-0 bg-transparent font-large text-lg px-5 py-2.5 text-center inline-flex items-center me-2 mb-0.5 text-black dark:text-white"
            key={idx}
          >
            {el.name}
          </button>
        );
      })}
    </div>
  );
};

export default Tracks;
