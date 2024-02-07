import { Box } from "@mui/material";
import { AvailableMenuType } from "../common/types.tsx";
import { useState, useEffect } from "react";
import { getTracks } from "../api/spotify.tsx";
import { getValueByKey } from "../common/utils.tsx";

interface ExternalUrl {
  spotify: string;
}

interface PlaylistTrack {
  added_at: string;
  added_by: {
    external_urls: ExternalUrl;
    href: string;
    id: string;
    type: string;
    uri: string;
  };
  is_local: boolean;
  primary_color: string | null;
  track: {
    album: Album;
    artists: Artist[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: {
      isrc: string;
    };
    external_urls: ExternalUrl;
    href: string;
    id: string;
    name: string;
    popularity: number;
    preview_url: string | null;
    track_number: number;
    type: string;
    uri: string;
  };
}

interface Album {
  album_type: string;
  artists: Artist[];
  available_markets: string[];
  external_urls: ExternalUrl;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

interface AlbumTrack {
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalUrl;
  href: string;
  id: string;
  name: string;
  preview_url: string | null;
  track_number: number;
  type: string;
  uri: string;
}

interface Artist {
  external_urls: ExternalUrl;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

interface Image {
  height: number;
  url: string;
  width: number;
}

interface dataInterface {
  added_at: string;
  tracks: {
    href: string;
    total: string;
  };
  album: {
    href: string;
  };
  show: {
    href: string;
  };
}

interface PlaylistTracksResponse {
  href: string;
  items: PlaylistTrack[];
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
}

export interface TracksProps {
  token: string;
  activeMenu: AvailableMenuType;
  data: dataInterface;
}
const Tracks = ({ token, data, activeMenu }: TracksProps) => {
  const [tracks, setTrack] = useState<any>([]);

  useEffect(() => {
    const url = () => {
      if (data) {
        if (activeMenu === "albums") {
          return data.album.href;
        } else if (activeMenu === "shows") {
          return data.show.href + "/episodes";
        } else {
          return data.tracks.href;
        }
      }
    };
    const fetchData = async () => {
      try {
        if (data) {
          const fetchedTracks = token && (await getTracks(token, url()));
          if (fetchedTracks !== null && fetchedTracks !== undefined) {
            const tracksObj = getValueByKey(fetchedTracks, "items");
            setTrack(tracksObj);
          }
        }
      } catch (error) {
        console.error("Error fetching tracks:", error);
      }
    };
    fetchData();
  }, [token, data, activeMenu]);

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
        {tracks &&
          activeMenu !== "playlists" &&
          tracks.map((el, idx) => {
            return <span>{el.name}</span>;
          })}
        {tracks &&
          activeMenu === "playlists" &&
          tracks.map((el, idx) => {
            return <span>{el.track.name}</span>;
          })}
      </Box>
    </>
  );
};

export default Tracks;
