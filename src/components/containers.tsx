import { Box } from "@mui/material";
export interface MainContainerProps {
  children: string | JSX.Element | JSX.Element[];
}
export function MainContainer({ children }: MainContainerProps) {
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#75B7A4",
        p: 1,
        width: 1,
        height: "100vh",
      }}
    >
      <Box
        sx={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          p: 1,
          border: "2px solid #FFF",
          borderRadius: 3,
          width: 1,
          height: "100%",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export function BaseContainer({
  children,
  direction = "row",
  justify = "center",
  align = "center",
  radius = 3,
  background = "#75B7A4",
  border = "2px solid #FFF",
  width = 1,
}) {
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        display: "flex",
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        p: 1,
        border: border,
        borderRadius: radius,
        backgroundColor: background,
        width: width,
      }}
    >
      {children}
    </Box>
  );
}

export function PlaylistContainer({ children }: MainContainerProps) {
  return <Box>{children}</Box>;
}

export default { MainContainer, PlaylistContainer };
