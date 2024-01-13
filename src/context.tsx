import { createContext, useState } from "react";

type GlobalContextType = {
  userLogged: User | null;
  updateUserLogged: (user: User) => void;
  spotifyToken: string | null;
  updateSpotifyToken: (token: string) => void;
};

const defaultContextValue = {
  userLogged: null,
  updateUserLogged: () => {},
  spotifyToken: null,
  updateSpotifyToken: () => {},
};

export const GlobalContext =
  createContext<GlobalContextType>(defaultContextValue);

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [userLogged, setUserLogged] = useState<User | null>(null!);
  const updateUserLogged = (user: User) => {
    setUserLogged(user);
  };
  const [spotifyToken, setSpotifyToken] = useState("");
  const updateSpotifyToken = (spotifyToken: string) => {
    if (spotifyToken !== null && spotifyToken !== "") {
      setSpotifyToken(spotifyToken);
    }
  };
  return (
    <GlobalContext.Provider
      value={{ userLogged, updateUserLogged, spotifyToken, updateSpotifyToken }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
