import Stack from "@mui/system/Stack";
import NavBar from "./navbar";
import { ContainerProps } from "../common/types";

export function MainContainer({ children }: ContainerProps) {
  return (
    <Stack
      id="Maincontainer"
      sx={{
        backgroundColor: "primary.main",
        border: "2px solid #FFF",
        height: "100vh",
        width: "100vw",
      }}
    >
      <NavBar />
      {children}
    </Stack>
  );
}

export default { MainContainer };
