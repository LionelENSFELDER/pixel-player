import { createContext, useState } from "react";

type GlobalContextType = {
  themeMode: string;
  toggleThemeMode: (mode: string) => void;
};

const defaultContextValue = {
  themeMode: "light",
  toggleThemeMode: () => {},
};

export const GlobalContext = createContext<GlobalContextType>(defaultContextValue);

export const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeMode, setThemeMode] = useState<string>("light");
  const toggleThemeMode = (mode: string) => {
    setThemeMode(mode);
  };
  return <GlobalContext.Provider value={{ themeMode, toggleThemeMode }}>{children}</GlobalContext.Provider>;
};
