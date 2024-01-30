import { Box, Button } from "@mui/material";
import { SelectedMenuType, MenuProps } from "../common/types";

const Menu = ({ handleSelectedMenu }: MenuProps) => {
  const menuItems: SelectedMenuType[] = ["trending", "playlists", "albums", "shows"];

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
          menuItems.map((item: SelectedMenuType, i) => {
            return (
              <Button key={i} sx={{ color: "text.primary" }} onClick={() => handleSelectedMenu(item)}>
                {item}
              </Button>
            );
          })}
      </Box>
    </Box>
  );
};

export default Menu;
