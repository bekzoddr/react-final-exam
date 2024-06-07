import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const Auth = () => {
  let user = { name: "John" };
  // return user ? <Outlet /> : <Navigate replace to="/login" />;
};

export default Auth;
