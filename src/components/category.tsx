import { Box, Button } from "@mui/material";
import { LibraryObject, AvailableMenuType } from "../types";

export interface LibraryProps {
  activeMenu: AvailableMenuType;
  data: LibraryObject;
  handleIdx: (idx: number) => void;
}

const Category = ({ activeMenu, data, handleIdx }: LibraryProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        p: 1,
        borderLef: "2px solid #FFFF",
        color: "text.primary",
        backgroundColor: "blue",
        flexGrow: 1,
        height: "100%",
      }}
    >
      <h2>{activeMenu}</h2>
      {data &&
        data.map((item, idx) => {
          return (
            <Button
              sx={{ color: "text.primary" }}
              key={idx}
              onClick={() => {
                handleIdx(idx);
              }}
            >
              {item.album ? item.album.name : item.show ? item.show.name : item.name}
            </Button>
          );
        })}
    </Box>
  );
};

export default Category;
