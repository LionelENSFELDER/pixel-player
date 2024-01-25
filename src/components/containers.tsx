import Stack from "@mui/system/Stack";
import NavBar from "./navbar";

export interface ContainerProps {
  children: string | JSX.Element | JSX.Element[];
}
export interface BaseContainerProps {
  children: string | JSX.Element | JSX.Element[];
  direction: string;
  justify: string;
  align: string;
  radius: number;
  background: string;
  border: string;
  width: number;
}

export function MainContainer({ children }: ContainerProps) {
  return (
    <Stack
      id="Maincontainer"
      // spacing={2}
      sx={{
        backgroundColor: "primary.main",
        // p: 1,
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
