import { createContext, useState } from "react";
import { GlobalContextType } from "./common/types";

const defaultContextValue = {
  spotifyToken: "",
  updateSpotifyToken: () => {},
  colorMode: "light",
  toggleColorMode: () => {},
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

  return (
    <GlobalContext.Provider
      value={{
        spotifyToken,
        updateSpotifyToken,
        colorMode,
        toggleColorMode,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
