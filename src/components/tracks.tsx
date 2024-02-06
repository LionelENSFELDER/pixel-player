import { Box, Button } from "@mui/material";
import { LibraryObject } from "../common/types.tsx";
import { useState, useEffect } from "react";

export interface TracksProps {
  data: { name: string };
}
const Tracks = ({ data }: TracksProps) => {
  console.log("data = ", data);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          p: 1,
          borderLef: "2px solid #FFF",
          backgroundColor: "",
          height: "100%",
        }}
      >
        <h1>Tracks view !!</h1>
        {data.name}
      </Box>
    </>
  );
};

export default Tracks;
