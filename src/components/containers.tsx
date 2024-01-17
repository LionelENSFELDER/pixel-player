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
      useFlexGap
      sx={{
        boxSizing: "border-box",
        backgroundColor: "#75B7A4",
        p: 1,
        border: "2px solid #FFF",
        borderRadius: 3,
        height: "100%",
      }}
    >
      <NavBar />
      {children}
    </Stack>
  );
}

export default { MainContainer };
