export type AvailableMenuType = "trending" | "playlists" | "albums" | "shows";

export type GlobalContextType = {
  spotifyToken: string;
  updateSpotifyToken: (token: string) => void;
  colorMode: string;
  toggleColorMode: () => void;
};

export interface LibraryObject {
  trending: object;
  playlists: object;
  albums: object;
  shows: object;
}

export interface TracksProps {
  tracks: [];
}

export interface PlayerProps {
  token: string | null;
}

export interface ContainerProps {
  children: string | JSX.Element | JSX.Element[];
}

export interface TracksProps {
  token: string;
  activeMenu: AvailableMenuType;
  data: TracksDataInterface;
}

export interface TracksDataInterface {
  added_at: string;
  name: string;
  href: string;
  tracks: {
    href: string;
    total: string;
    name: string;
  };
  album: {
    href: string;
  };
  show: {
    href: string;
  };
  track: {
    name: string;
  };
}
