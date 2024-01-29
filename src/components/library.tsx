import { Box, Button } from "@mui/material";
interface LibraryProps {
  data: [];
}
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
          borderLef: "2px solid #FFF",
          backgroundColor: "red",
          height: "100%",
        }}
      >
        {data &&
          data.map((item, i) => {
            console.log(item);
            return (
              <Button key={i} sx={{ color: "text.primary" }} onClick={() => console.log(item)}>
                {item}
              </Button>
            );
          })}
      </Box>
    </Box>
  );
};

export default Library;
