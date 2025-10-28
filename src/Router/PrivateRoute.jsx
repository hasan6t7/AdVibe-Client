import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children, role }) => {
  const { user } = useSelector((state) => state.auth.user);
  const location = useLocation();
  if (!user) {
    alert("You must login");
    return (
      <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
    );
  }
  if (role && user?.role !== role) {
    alert("You must be an admin");
    return (
      <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
    );
  }
  return children;
};

export default PrivateRoute;
