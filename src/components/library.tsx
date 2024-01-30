import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { LibraryProps } from "../common/types";

const Library = ({ data }: LibraryProps) => {
  const [dataToDisplay, setDataToDisplay] = useState(data);
  console.log("dataToDisplay", dataToDisplay);
  useEffect(() => {
    setDataToDisplay(data);
  }, [data]);

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
      </Box>
    </Box>
  );
};

export default Library;
