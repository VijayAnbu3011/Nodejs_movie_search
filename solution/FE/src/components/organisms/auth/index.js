/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getLocalStorage } from "../../../services/utils";

const Auth = ({ children }) => {
  const session = getLocalStorage("userId");
  const navigate = useNavigate();

  useEffect(() => {
    if (!session) {
      navigate("/auth/login");
    }
  }, [session]);

  if (session) return <>{children}</>;
  return null;
};

export default Auth;
