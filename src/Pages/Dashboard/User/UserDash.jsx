import React from "react";
import { useSelector } from "react-redux";
import { useGetUserStatsQuery } from "../../../Redux/features/Stats/statsApi";
import UserStats from "./UserStats";
import UserStatsChart from "./UserStatsChart";

const UserDash = () => {
  const { user } = useSelector((state) => state.auth.user);
  const { data } = useGetUserStatsQuery(user?.email);
  const userStats = data?.data || {};
//   const { totalPayment, totalReviews, totalPurchasedProduct } = userStats;

  return (
    <div className="">
      <div>
        <h1 className="text-2xl font-semibold mb-4">User Dashboard</h1>
        <p className="text-gray-500">
          Hi! {user?.username} . Welcome to your dashboard
        </p>
      </div>
      <div>
        <UserStats userStats={userStats}></UserStats>
        <UserStatsChart userStats={userStats}></UserStatsChart>
      </div>
    </div>
  );
};

export default UserDash;
