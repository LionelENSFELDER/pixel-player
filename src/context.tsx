import { createContext, useState } from "react";

type GlobalContextType = {
  colorMode: string;
  toggleColorMode: () => void;
  listView: string;
  updateListView: (view: string) => void;
};

const defaultContextValue = {
  colorMode: "light",
  toggleColorMode: () => {},
  listView: "Playlists",
  updateListView: () => {},
};

export const GlobalContext = createContext<GlobalContextType>(defaultContextValue);

export const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
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

  return (
    <GlobalContext.Provider value={{ colorMode, toggleColorMode, listView, updateListView }}>
      {children}
    </GlobalContext.Provider>
  );
};
