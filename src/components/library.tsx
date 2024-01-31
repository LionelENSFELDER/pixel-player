import { Box, Button } from "@mui/material";
import { LibraryProps } from "../common/types";

const Library = ({ data }: LibraryProps) => {
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
          data.map((item: any, i) => {
            if (Object.hasOwn(item, "album")) {
              return (
                <Button key={i} onClick={() => console.log(item["album"].id)}>
                  {item["album"].name} - {item["album"].id}
                </Button>
              );
            } else if (Object.hasOwn(item, "show")) {
              return (
                <Button key={i} onClick={() => console.log(item["show"].id)}>
                  {item["show"].name} - {item["show"].id}
                </Button>
              );
            } else {
              return (
                <Button key={i} onClick={() => console.log(item.id)}>
                  {item.name} - {item.id}
                </Button>
              );
            }
          })}
      </Box>
    </Box>
  );
};

export default Library;
