import { Box, Button, Typography } from "@mui/material";
import { LibraryObject, AvailableMenuType } from "../types";
import capitalizeFirst from "../utils/capitalizeFirst";

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
        flexGrow: 1,
        height: "100%",
      }}
    >
      <Typography variant="h6">{capitalizeFirst(activeMenu)}</Typography>
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
              <Box
                component="img"
                src={
                  item.images
                    ? item.images[2].url
                    : item.album
                    ? item.album.images[2].url
                    : item.show
                    ? item.show.images[2].url
                    : "../assets/img/placeholder"
                }
                sx={{
                  marginRight: 2,
                }}
              />
              <Typography sx={{}}>
                {item.album
                  ? item.album.name
                  : item.show
                  ? item.show.name
                  : item.name}
              </Typography>
            </Button>
          );
        })}
    </Box>
  );
};

export default Category;
