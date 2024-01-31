export type SelectedMenuType = "trending" | "playlists" | "albums" | "shows";

export type GlobalContextType = {
  spotifyToken: string;
  updateSpotifyToken: (token: string) => void;
  colorMode: string;
  toggleColorMode: () => void;
};

export type ArrayOfObject = object[];

export interface LibraryObject {
  trending: object;
  playlists: object;
  albums: object;
  shows: object;
}

export type LibraryDataType = { [key in SelectedMenuType]: object };

export interface PlaylistsProps {
  token: string | null;
}

export interface ListViewProps {
  token: string | null;
  view: string;
}

export interface LibraryProps {
  data: LibraryObject;
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
