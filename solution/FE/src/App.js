import "./styles/colors.scss";
import "./styles/fonts.scss";
import "./styles/global.scss";
import "./styles/width.scss";

import { createTheme, ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./components/organisms/ProtectedRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const theme = createTheme({
  typography: {
    fontFamily: "'Montserrat', sans-serif",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box className="vw-100 vh-100">
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          theme="dark"
        />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate replace to="/auth/login" />} />
            <Route path="/*" element={<ProtectedRoutes />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
};

export default App;
