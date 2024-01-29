import { createContext, useState } from "react";

type GlobalContextType = {
  spotifyToken: string;
  updateSpotifyToken: (token: string) => void;
  colorMode: string;
  toggleColorMode: () => void;
  menu: string;
  updateMenu: (view: string) => void;
  tracks: [];
  updateTracks: (id: string) => void;
};

const defaultContextValue = {
  spotifyToken: "",
  updateSpotifyToken: () => {},
  colorMode: "light",
  toggleColorMode: () => {},
  menu: "Playlists",
  updateMenu: () => {},
  tracks: [],
  updateTracks: () => {},
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

  const [menu, setMenu] = useState<string>("Playlists");
  const updateMenu = (name: string) => {
    if (name !== menu) {
      setMenu(name);
    }
  };

  const [tracks, setTracks] = useState<[]>([]);
  const updateTracks = (tracks: []) => {
    setTracks(tracks);
  };

  return (
    <GlobalContext.Provider
      value={{
        spotifyToken,
        updateSpotifyToken,
        colorMode,
        toggleColorMode,
        menu,
        updateMenu,
        tracks,
        updateTracks,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
