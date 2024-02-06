import { Box, Button } from "@mui/material";
import { LibraryObject, AvailableMenuType } from "../common/types";

export interface LibraryProps {
  activeMenu: AvailableMenuType;
  data: LibraryObject;
  handleIdx: (idx: number) => void;
}

const Library = ({ activeMenu, data, handleIdx }: LibraryProps) => {
  return (
    <Box sx={{ backgroundColor: "green", width: 1 / 12, height: "100%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          p: 1,
          borderLef: "2px solid #FFFF",
          backgroundColor: "white",
          height: "100%",
          width: "100%",
        }}
      >
        <h1>Library</h1>
        {data &&
          data.map((item, idx) => {
            if (activeMenu === "albums") {
              return (
                <Button
                  key={idx}
                  onClick={() => {
                    handleIdx(idx);
                  }}
                >
                  {item.album.name} - {item.album.type}
                </Button>
              );
            } else if (activeMenu === "shows") {
              return (
                <Button
                  key={idx}
                  onClick={() => {
                    handleIdx(idx);
                  }}
                >
                  {item.show.name} - {item.show.type}
                </Button>
              );
            } else {
              return (
                <Button
                  key={idx}
                  onClick={() => {
                    handleIdx(idx);
                  }}
                >
                  {item.name} - {item.type}
                </Button>
              );
            }
          })}
      </Box>
    </Box>
  );
};

export default Library;
