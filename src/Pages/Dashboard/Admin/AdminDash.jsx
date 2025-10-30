import React from "react";
import { useSelector } from "react-redux";
import AdminStats from "./Admin Stats/AdminStats";
import { useGetAdminStatsQuery } from "../../../Redux/features/Stats/statsApi";

const AdminDash = () => {
  const { user } = useSelector((state) => state.auth.user);
  const { data: adminStats, isLoading } = useGetAdminStatsQuery();

  if (isLoading) return <div>loading...</div>;
  return (
    <div className="">
      <div className="mb-8 ">
        <h1 className="text-3xl sm:text-3xl font-bold bg-gradient-to-r from-[#d23141] via-[#ff758c] to-[#d23141] bg-clip-text text-transparent tracking-wide drop-shadow-sm ">
          <span className="playfair sm:text-4xl font-extrabold">
            Admin Dashboard
          </span>{" "}
        </h1>

        <p className="mt-2 text-gray-600  sm:text-lg font-medium">
          Hi, {user?.username || "User"}! Welcome to your admin overview.
        </p>

        <div className="w-44 sm:w-40 h-[3px] bg-gradient-to-r from-[#d23141] via-[#ff758c] to-transparent rounded-full mt-3"></div>
      </div>
      <div>
        <AdminStats adminStats={adminStats}></AdminStats>
      </div>
    </div>
  );
};

export default AdminDash;
