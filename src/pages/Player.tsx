import { useContext, useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Menu from "../components/menu";
// import { GlobalContext } from "../context";
// import ListView from "../components/listView";
// import TracksView from "../components/tracksView";
import { getUserCurrent } from "../api/spotify";
import Library from "../components/library";

interface PlayerProps {
  token: string | null;
}

interface userContentType {
  [key: string]: [];
}

function Player({ token }: PlayerProps) {
  // const context = useContext(GlobalContext);
  // const listView = context.listView;
  // const [playlists, setPlaylists] = useState([]);
  // const [albums, setAlbums] = useState([]);
  // const [shows, setShows] = useState([]);
  const [userContent, setUserContent] = useState<userContentType>({ playlists: [], albums: [], shows: [] });
  const [selectedMenu, setSelectedMenu] = useState("albums");
  const handleSelectedMenu = (name: string) => {
    setSelectedMenu(name);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const playlists = token ? await getUserCurrent(token, "playlists") : [];
        const albums = token ? await getUserCurrent(token, "albums") : [];
        const shows = token ? await getUserCurrent(token, "shows") : [];

        // setPlaylists(playlists);
        // setAlbums(albums);
        // setShows(shows);

        const content: userContentType = { playlists: [], albums: [], shows: [] };
        content["playlists"] = playlists;
        content["albums"] = albums;
        content["shows"] = shows;
        console.log(content[selectedMenu]);
        setUserContent(content);
        console.log(userContent[selectedMenu]);
      } catch (error) {
        console.error("Error fetching playlists:", error);
      }
    };
    fetchData();
  }, [selectedMenu]);

  return (
    <Grid sx={{ flexGrow: 1 }}>
      <Grid
        spacing={1}
        id="player-container"
        sx={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          backgroundColor: "pink",
          width: 1,
          height: 10 / 12,
          // p: 2,
        }}
      >
        {token && (
          <>
            <Menu handleSelectedMenu={handleSelectedMenu} />
            <Library data={userContent[selectedMenu]} />
            {/* <Tracks /> */}
          </>
        )}
        {/* {token && <ListView view={listView} token={token} />}
        {token && <TracksView />} */}
      </Grid>
    </Grid>
  );
}

export default Player;
