import { useContext } from "react";
import { GlobalContext } from "../context";
import { Box, Button } from "@mui/material";

const Menu = () => {
  const context = useContext(GlobalContext);
  const updateListView = context.updateListView;
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
              <Button key={i} sx={{ color: "text.primary" }} onClick={() => updateListView(item)}>
                {item}
              </Button>
            );
          })}
      </Box>
    </Box>
  );
};

export default Menu;
