import React from "react";
import { useSelector } from "react-redux";
import AdminDash from "../Admin/AdminDash";
import UserDash from "../User/UserDash";

const DashboardHome = () => {
  const data = useSelector((state) => state.auth.user);
  const user = data?.user;
  const role = user?.role;

  if (role === "admin") {
    return <AdminDash></AdminDash>;
  } else if (role === "user") {
    return <UserDash></UserDash>;
  } else {
    return <p>Unathorized</p>;
  }
};

export default DashboardHome;
