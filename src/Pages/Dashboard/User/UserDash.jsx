import React from "react";
import { useSelector } from "react-redux";
import { useGetUserStatsQuery } from "../../../Redux/features/Stats/statsApi";
import UserStats from "./UserStats";
import UserStatsChart from "./UserStatsChart";
import Loader from "../../../Components/Loader";

const UserDash = () => {
  const { user } = useSelector((state) => state.auth.user);
  const { data, isLoading } = useGetUserStatsQuery(user?.email);
  const userStats = data?.data || {};

  if (isLoading) return <Loader />;
  return (
    <div className="">
      <div className="mb-8 ">
        <h1 className="text-3xl sm:text-3xl font-bold bg-gradient-to-r from-[#d23141] via-[#ff758c] to-[#d23141] bg-clip-text text-transparent tracking-wide drop-shadow-sm ">
          <span className="playfair sm:text-4xl font-extrabold">
            Welcome Back,
          </span>{" "}
          {user?.username || "User"}
        </h1>

        <p className="mt-2 text-gray-600  sm:text-lg font-medium">
          Here’s a quick overview of your recent activity and stats
        </p>

        <div className="w-44 sm:w-40 h-[3px] bg-gradient-to-r from-[#d23141] via-[#ff758c] to-transparent rounded-full mt-3"></div>
      </div>
      <div>
        <UserStats userStats={userStats}></UserStats>
        <UserStatsChart userStats={userStats}></UserStatsChart>
      </div>
    </div>
  );
};

export default UserDash;
