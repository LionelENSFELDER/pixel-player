import { Box, Button } from "@mui/material";
import { AvailableMenuType } from "../types";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AlbumIcon from "@mui/icons-material/Album";
import MicIcon from "@mui/icons-material/Mic";
import WhatshotIcon from "@mui/icons-material/Whatshot";

export interface MenuProps {
  handleActiveMenu: (name: AvailableMenuType) => void;
}

const Library = ({ handleActiveMenu }: MenuProps) => {
  const menuItems: AvailableMenuType[] = ["trending", "playlists", "albums", "shows"];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        p: 1,
        borderLeft: "2px solid grey.500",
        backgroundColor: "background.default",
      }}
    >
      <h2>Library</h2>
      {menuItems.length > 0 &&
        menuItems.map((item: AvailableMenuType, i) => {
          return (
            <Button
              key={i}
              size="large"
              variant="text"
              sx={{ color: "text.primary" }}
              onClick={() => handleActiveMenu(item)}
              startIcon={
                item === "playlists" ? (
                  <FavoriteIcon />
                ) : item === "albums" ? (
                  <AlbumIcon />
                ) : item === "shows" ? (
                  <MicIcon />
                ) : item === "trending" ? (
                  <WhatshotIcon />
                ) : (
                  <WhatshotIcon />
                )
              }
            >
              {item}
            </Button>
          );
        })}
    </Box>
  );
};

export default Library;
