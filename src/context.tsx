import { createContext, useState } from "react";

type GlobalContextType = {
  colorMode: string;
  toggleColorMode: () => void;
};

const defaultContextValue = {
  colorMode: "light",
  toggleColorMode: () => {},
};

export const GlobalContext = createContext<GlobalContextType>(defaultContextValue);

export const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [colorMode, setColorMode] = useState<string>("light");
  const toggleColorMode = () => {
    setColorMode((currentMode) => (currentMode === "light" ? "dark" : "light"));
  };
  return <GlobalContext.Provider value={{ colorMode, toggleColorMode }}>{children}</GlobalContext.Provider>;
};
