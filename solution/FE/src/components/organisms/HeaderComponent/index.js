import Box from "@mui/material/Box";
import React from "react";
import LOGO from "../../../assets/Group 9@2x.png";
import LogoutIcon from "@mui/icons-material/Logout";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HeaderComponent = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <Box className="px-4 section-header p-2 d-flex alignitems-center justify-content-between">
      <img src={LOGO} alt="LOGO" width="140px" height="40px" />
      <IconButton onClick={handleLogout}>
        <LogoutIcon sx={{ color: "#fff" }} />
      </IconButton>
    </Box>
  );
};

export default HeaderComponent;
