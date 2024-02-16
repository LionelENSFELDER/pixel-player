import { Box, Button } from "@mui/material";
import { LibraryObject, AvailableMenuType } from "../types";

export interface LibraryProps {
  activeMenu: AvailableMenuType;
  data: LibraryObject;
  handleIdx: (idx: number) => void;
}

const Category = ({ activeMenu, data, handleIdx }: LibraryProps) => {
  return (
    <>
      <div className="flex flex-col justify-top items-center w-80 bg-white dark:bg-black">
        <h2 className="text-black dark:text-white">{activeMenu}</h2>
        {data &&
          data.map((item, idx) => {
            return (
              <button
                className="border-0 bg-transparent font-large text-lg px-5 py-2.5 text-center inline-flex items-center me-2 mb-8 text-black dark:text-white"
                key={idx}
                onClick={() => {
                  handleIdx(idx);
                }}
              >
                {item.album
                  ? item.album.name
                  : item.show
                  ? item.show.name
                  : item.name}
              </button>
            );
          })}
      </div>
    </>
  );
};

export default Category;
