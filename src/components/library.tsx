import { Box, Button } from "@mui/material";
import { LibraryObject } from "../common/types";

export interface LibraryProps {
  data: LibraryObject;
  handleIdx: (idx: number) => void;
}

const Library = ({ data, handleIdx }: LibraryProps) => {
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
            return (
              <Button
                key={idx}
                onClick={() => {
                  console.log("item idx", idx);
                  handleIdx(idx);
                }}
              >
                {item.name}
              </Button>
            );
          })}
      </Box>
    </Box>
  );
};

export default Library;
