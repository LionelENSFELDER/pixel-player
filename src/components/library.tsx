import { AvailableMenuType } from "../types";
import { BsFileEarmarkMusicFill } from "react-icons/bs";
import { RiAlbumFill } from "react-icons/ri";
import { FaMicrophoneAlt } from "react-icons/fa";
import { FaFire } from "react-icons/fa6";

export interface MenuProps {
  handleActiveMenu: (name: AvailableMenuType) => void;
}

export interface LibraryItemProps {
  item: AvailableMenuType;
}

const Library = ({ handleActiveMenu }: MenuProps) => {
  const LibraryItem = ({ item }: LibraryItemProps) => {
    return (
      <button
        onClick={() => handleActiveMenu(item)}
        type="button"
        className="border-0 bg-transparent font-large text-lg px-5 py-2.5 text-center inline-flex items-center me-2 mb-8 text-black dark:text-white"
      >
        {item === "trending" ? (
          <FaFire size={30} />
        ) : item === "playlists" ? (
          <BsFileEarmarkMusicFill size={30} />
        ) : item === "albums" ? (
          <RiAlbumFill size={30} />
        ) : item === "shows" ? (
          <FaMicrophoneAlt size={30} />
        ) : (
          <BsFileEarmarkMusicFill size={30} />
        )}
      </button>
    );
  };

  const menuItems: AvailableMenuType[] = [
    "trending",
    "playlists",
    "albums",
    "shows",
  ];

  return (
    <div className="flex flex-col justify-top items-center w-20 bg-white dark:bg-black">
      {menuItems.length > 0 &&
        menuItems.map((item: AvailableMenuType) => {
          return <LibraryItem item={item} />;
        })}
    </div>
  );
};

export default Library;
