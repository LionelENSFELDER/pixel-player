import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalContextProvider } from "./context";
// import { ThemeProvider } from "@mui/material/styles";
import Login from "./pages/login.tsx";
import LoginCallback from "./pages/loginCallback.tsx";
import App from "./App.tsx";
import CssBaseline from "@mui/material/CssBaseline";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/loginCallback",
    element: <LoginCallback />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalContextProvider>
      {/* <ThemeProvider theme={theme}> */}
      <CssBaseline />
      <RouterProvider router={router} />
      {/* </ThemeProvider> */}
    </GlobalContextProvider>
  </React.StrictMode>
);
