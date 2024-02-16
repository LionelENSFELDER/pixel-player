import { useState, useEffect } from "react";
import NavBar from "../components/navbar";
import Library from "../components/library";
import Category from "../components/category";
import Tracks from "../components/tracks";
import { getUserCurrentLibrary } from "../api/spotify";
import { PlayerProps, AvailableMenuType, LibraryObject } from "../types";

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
        const playlists =
          token && (await getUserCurrentLibrary(token, "playlists"));
        const albums = token && (await getUserCurrentLibrary(token, "albums"));
        const shows = token && (await getUserCurrentLibrary(token, "shows"));

        setLibrary({
          trending: {},
          playlists: playlists,
          albums: albums,
          shows: shows,
        });
      } catch (error) {
        console.error("Error fetching playlists:", error);
      }
    };
    fetchData();
  }, [token]);

  return (
    <div className="flex flex-col bg-white dark:bg-black h-dvh p-2">
      <NavBar />
      <div className="flex flex-row grow gap-6 bg-pink-500">
        <Library handleActiveMenu={handleActiveMenu} />
        {token && library !== null && (
          <Category
            activeMenu={activeMenu}
            data={library[activeMenu]}
            handleIdx={handleIdx}
          />
        )}
        {token && library !== null && (
          <Tracks
            token={token}
            activeMenu={activeMenu}
            data={Object.values(library[activeMenu])[idx]}
            tracks={[]}
          />
        )}
        <div className="grow bg-green-500">
          <h1>now playing</h1>
        </div>
      </div>
    </div>
  );
};

export default Player;
