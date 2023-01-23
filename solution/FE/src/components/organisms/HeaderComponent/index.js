import Box from "@mui/material/Box";
import React from "react";
import LOGO from "../../../assets/Group 9@2x.png";

const HeaderComponent = () => {
  return (
    <Box className="px-4 section-header p-2">
      <img src={LOGO} alt="LOGO" width="140px" height="40px" />
    </Box>
  );
};

export default HeaderComponent;
