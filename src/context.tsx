import { createContext, useState } from "react";

type GlobalContextType = {
  spotifyToken: string;
  updateSpotifyToken: (token: string) => void;
  colorMode: string;
  toggleColorMode: () => void;
  listView: string;
  updateListView: (view: string) => void;
  playlistTracks: [];
  updatePlaylistTracks: (tracks: []) => void;
};

const defaultContextValue = {
  spotifyToken: "",
  updateSpotifyToken: () => {},
  colorMode: "light",
  toggleColorMode: () => {},
  listView: "Playlists",
  updateListView: () => {},
  playlistTracks: [],
  updatePlaylistTracks: (tracks: []) => {},
};

export const GlobalContext = createContext<GlobalContextType>(defaultContextValue);

export const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [spotifyToken, setSpotifyToken] = useState<string>("");
  const updateSpotifyToken = (token: string) => {
    setSpotifyToken(token);
  };

  const [colorMode, setColorMode] = useState<string>("light");
  const toggleColorMode = () => {
    setColorMode((currentMode) => (currentMode === "light" ? "dark" : "light"));
  };

  const [listView, setListView] = useState<string>("Playlists");
  const updateListView = (view: string) => {
    if (view !== listView) {
      setListView(view);
    }
  };

  const [playlistTracks, setPlaylistTracks] = useState<[]>([]);
  const updatePlaylistTracks = (tracks: []) => {
    setPlaylistTracks(tracks);
  };

  return (
    <GlobalContext.Provider
      value={{
        spotifyToken,
        updateSpotifyToken,
        colorMode,
        toggleColorMode,
        listView,
        updateListView,
        playlistTracks,
        updatePlaylistTracks,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
