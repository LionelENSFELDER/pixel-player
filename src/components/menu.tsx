import { useContext, useState } from "react";
import { GlobalContext } from "../context";
import { Box, Button } from "@mui/material";
interface MenuProps {
  handleSelectedMenu: (name: string) => void;
}
const Menu = ({ handleSelectedMenu }: MenuProps) => {
  const context = useContext(GlobalContext);
  const updateMenu = context.updateMenu;
  const menuItems = ["Trending", "Playlists", "Albums", "Podcasts"];

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
        {menuItems.length > 0 &&
          menuItems.map((item, i) => {
            return (
              <Button key={i} sx={{ color: "text.primary" }} onClick={() => handleSelectedMenu(item.toLowerCase())}>
                {item}
              </Button>
            );
          })}
      </Box>
    </Box>
  );
};

export default Menu;
