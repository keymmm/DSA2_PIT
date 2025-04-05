import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function Protected() {
  const isLogin = true;
  return isLogin ? <Outlet /> : <Navigate to="/" />;
}

export default Protected;
