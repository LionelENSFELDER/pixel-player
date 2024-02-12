import { useState, useEffect } from "react";
import NavBar from "../components/navbar";
import Library from "../components/library";
import Category from "../components/category";
import Tracks from "../components/tracks";
import { getUserCurrentLibrary } from "../api/spotify";
import { PlayerProps, AvailableMenuType, LibraryObject } from "../types";
import { BsFileEarmarkMusicFill } from "react-icons/bs";
import { RiAlbumFill } from "react-icons/ri";
import { FaMicrophoneAlt } from "react-icons/fa";
import { FaFire } from "react-icons/fa6";

const Player = ({ token }: PlayerProps) => {
  const [library, setLibrary] = useState<LibraryObject | null>(null);

  const [activeMenu, setActiveMenu] = useState<AvailableMenuType>("albums");
  const handleActiveMenu = (name: AvailableMenuType) => {
    setActiveMenu(name);
  };

  const [idx, setIdx] = useState<number>(0);
  const handleIdx = (idx: number) => {
    setIdx(idx);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const playlists = token && (await getUserCurrentLibrary(token, "playlists"));
        const albums = token && (await getUserCurrentLibrary(token, "albums"));
        const shows = token && (await getUserCurrentLibrary(token, "shows"));

        setLibrary({ trending: {}, playlists: playlists, albums: albums, shows: shows });
      } catch (error) {
        console.error("Error fetching playlists:", error);
      }
    };
    fetchData();
  }, [token]);

  return (
    <div className="flex flex-col bg-red-500 h-dvh p-2">
      <div className="flex flex-row h-20 bg-yellow-500">
        <h1>navbar</h1>
        <label className="relative block">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
          </span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search for anything..."
            type="text"
            name="search"
          />
        </label>
      </div>

      <div className="flex flex-row grow gap-6 bg-pink-500">
        <div className="flex flex-col justify-top items-center w-20 bg-orange-500">
          <button
            type="button"
            className="border-0 bg-transparent px-5 py-2.5 text-center inline-flex items-center me-2 mb-8"
          >
            <FaFire size={30} />
          </button>
          <button
            type="button"
            className="border-0 bg-transparent font-large text-lg px-5 py-2.5 text-center inline-flex items-center me-2 mb-8"
          >
            <BsFileEarmarkMusicFill size={30} />
          </button>
          <button
            type="button"
            className="border-0 bg-transparent font-large text-lg px-5 py-2.5 text-center inline-flex items-center me-2 mb-8"
          >
            <RiAlbumFill size={30} />
          </button>
          <button
            type="button"
            className="border-0 bg-transparent font-large text-lg px-5 py-2.5 text-center inline-flex items-center me-2 mb-8"
          >
            <FaMicrophoneAlt size={30} />
          </button>
        </div>
        <div className="w-80 bg-green-500">
          <h1>library</h1>
        </div>
        <div className="w-96 bg-green-500">
          <h1>tracks</h1>
        </div>
        <div className="grow bg-green-500">
          <h1>now playing</h1>
        </div>
      </div>
    </div>
    // <Box sx={{ display: "flex", flexDirection: "column", backgroundColor: "yellow", flexGrow: 1, height: "100vh" }}>
    //   <NavBar />
    //   <Container maxWidth={false} sx={{ p: 0, backgroundColor: "yellow", flexGrow: 1, height: 1 }}>
    //     {token && library !== null && (
    //       <Grid container spacing={2} height={1}>
    //         <Grid item xs={1}>
    //           <Library handleActiveMenu={handleActiveMenu} />
    //         </Grid>
    //         <Grid item xs={3}>
    //           <Category activeMenu={activeMenu} data={library[activeMenu]} handleIdx={handleIdx} />
    //         </Grid>
    //         <Grid item xs={3}>
    //           <Tracks
    //             token={token}
    //             activeMenu={activeMenu}
    //             data={Object.values(library[activeMenu])[idx]}
    //             tracks={[]}
    //           />
    //         </Grid>
    //         <Grid item xs={5}>
    //           <Box sx={{ m: 0, backgroundColor: "green", flexGrow: 1, height: "100%" }}>
    //             <span>Now playing...</span>
    //           </Box>
    //         </Grid>
    //       </Grid>
    //     )}
    //   </Container>
    // </Box>
  );
};

export default Player;
