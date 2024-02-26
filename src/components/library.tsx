import { Box, Button } from "@mui/material";
import { AvailableMenuType } from "../types";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { TrendingUp, CassetteTape, Disc3, Mic } from "lucide-react";

export interface MenuProps {
  handleActiveMenu: (name: AvailableMenuType) => void;
}

const Library = ({ handleActiveMenu }: MenuProps) => {
  const menuItems: AvailableMenuType[] = [
    "trending",
    "playlists",
    "albums",
    "shows",
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexGrow: 1,
        height: "100%",
        p: 1,
        borderLeft: "2px solid grey.500",
        color: "text.primary",
        bgColor: "background.default",
      }}
    >
      {menuItems.length > 0 &&
        menuItems.map((item: AvailableMenuType, i) => {
          return (
            <Button
              key={i}
              size="large"
              variant="text"
              sx={{
                color: "primary.dark",
                marginBottom: 3,
              }}
              onClick={() => handleActiveMenu(item)}
              startIcon={
                item === "playlists" ? (
                  <CassetteTape />
                ) : item === "albums" ? (
                  <Disc3 />
                ) : item === "shows" ? (
                  <Mic />
                ) : item === "trending" ? (
                  <TrendingUp />
                ) : (
                  <WhatshotIcon />
                )
              }
            ></Button>
          );
        })}
    </Box>
  );
};

export default Library;
