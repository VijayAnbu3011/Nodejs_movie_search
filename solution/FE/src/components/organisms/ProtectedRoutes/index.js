import React from "react";
import { useLocation } from "react-router-dom";
import { Component, LoginComponent } from "../../../routes";
import Auth from "../auth";
import LayoutComponent from "../LayoutComponent";

const ProtectedRoutes = () => {
  const { pathname } = useLocation();

  if (pathname.match("/movie")) {
    return (
      <Auth>
        <LayoutComponent />
      </Auth>
    );
  }

  if (pathname.startsWith("/auth/")) {
    return <LoginComponent />;
  }

  return <Component />;
};

export default ProtectedRoutes;
