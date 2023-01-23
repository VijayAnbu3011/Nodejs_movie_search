import Box from "@mui/material/Box";
import React from "react";
import Movie from "../../../pages/movie";
import HeaderComponent from "../HeaderComponent";

const LayoutComponent = () => {
  return (
    <Box className="bg-page w-100 h-100 overflowX-hidden overflowY-hidden">
      <HeaderComponent />
      <Box className="w-100 mt-1 page-height overflowX-hidden overflowY-scroll px-4 hide-scrollbar">
        <Movie />
      </Box>
    </Box>
  );
};

export default LayoutComponent;
