import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const DashLayout = () => {
  const { user } = useSelector((state) => state.auth.user);

  if (!user) {
    alert("You need to login");
    return <Navigate to="/login" replace />;
  }
  const renderDashboard = () => {
    switch (user?.role) {
      case "admin":
        return <div> Admin Dashboard </div>;
      case "user":
        return <div> User Dashboard </div>;
      default:
        return <Navigate to="/login" replace />;
    }
  };
  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-4 items-start justify-start">
      <aside>{renderDashboard()}</aside>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default DashLayout;
