import Playlists from "../components/playlists";

interface ListViewProps {
  token: string | null;
  view: string;
}

function ListView({ token, view }: ListViewProps) {
  const ListView = ({ view, token }: ListViewProps) => {
    switch (view) {
      case "Trending":
        return <h1>Trending</h1>;
        break;
      case "Playlist":
        return token ? <Playlists token={token} /> : <h1>Playlist error</h1>;
        break;
      case "Albums":
        return <h1>Albums</h1>;
        break;
      case "Podcasts":
        return <h1>Podcasts</h1>;
        break;
      default:
        return <Playlists token={token} />;
    }
  };

  return <ListView token={token} view={view} />;
}

export default ListView;
