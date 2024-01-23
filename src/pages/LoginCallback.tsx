import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { code, setToken } from "../adapters/spotify";
import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

function LoginCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (code) {
        await setToken(code);
        navigate("/");
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>LoginCallback page</h1>
      <Box component={CircularProgress} sx={{ width: "500px", height: "500px", display: "block" }} />
    </Box>
  );
}

export default LoginCallback;
