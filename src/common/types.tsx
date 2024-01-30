export type SelectedMenuType = "trending" | "playlists" | "albums" | "shows";

export type GlobalContextType = {
  spotifyToken: string;
  updateSpotifyToken: (token: string) => void;
  colorMode: string;
  toggleColorMode: () => void;
};

export type ArrayOfObject = object[];

export interface PlaylistsProps {
  token: string | null;
}

export interface ListViewProps {
  token: string | null;
  view: string;
}

export interface LibraryProps {
  type: SelectedMenuType;
  data: object[];
}

export interface MenuProps {
  handleSelectedMenu: (name: SelectedMenuType) => void;
}

export interface PlayerProps {
  token: string | null;
}

export interface ContainerProps {
  children: string | JSX.Element | JSX.Element[];
}

export interface BaseContainerProps {
  children: string | JSX.Element | JSX.Element[];
  direction: string;
  justify: string;
  align: string;
  radius: number;
  background: string;
  border: string;
  width: number;
}
