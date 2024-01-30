import { Box, Button } from "@mui/material";
import { LibraryProps } from "../common/types";

const Library = ({ data, type }: LibraryProps) => {
  return (
    <Box sx={{ backgroundColor: "green", width: 1 / 12, height: "100%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          p: 1,
          borderLef: "2px solid #FFF",
          backgroundColor: "red",
          height: "100%",
        }}
      >
        <h1>Library</h1>
        {type === "playlists" &&
          data.map((item: any, i) => {
            if (Object.hasOwn(item, "name") && Object.hasOwn(item, "id")) {
              return (
                <Button key={i} onClick={() => console.log(item.id)}>
                  {item.name} - {item.id}
                </Button>
              );
            }
          })}
        {type === "albums" &&
          data.map((item: any, i) => {
            if (
              Object.hasOwn(item, "album") &&
              Object.hasOwn(item["album"], "name") &&
              Object.hasOwn(item["album"], "id")
            ) {
              return (
                <Button key={i} onClick={() => console.log(item["album"].id)}>
                  {item["album"].name} - {item["album"].id}
                </Button>
              );
            }
          })}
        {type === "shows" &&
          data.map((item: any, i) => {
            if (
              Object.hasOwn(item, "show") &&
              Object.hasOwn(item["show"], "name") &&
              Object.hasOwn(item["show"], "id")
            ) {
              return (
                <Button key={i} onClick={() => console.log(item["show"].id)}>
                  {item["show"].name} - {item["show"].id}
                </Button>
              );
            }
          })}
      </Box>
    </Box>
  );
};

export default Library;
