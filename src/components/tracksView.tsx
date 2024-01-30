import { Box, Button } from "@mui/material";

function TracksView() {
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
        {/* {tracks.length > 0 &&
          tracks.map((item, i) => {
            console.log("track list item", item);
            return (
              <Button key={i} onClick={() => console.log(item)}>
                {item.track.name}
              </Button>
            );
          })} */}
      </Box>
    </>
  );
}

export default TracksView;
