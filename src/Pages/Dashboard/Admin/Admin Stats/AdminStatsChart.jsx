import React from "react";
import "chart.js/auto";
import { Pie, Line } from "react-chartjs-2";

const AdminStatsChart = ({ adminStats }) => {
  const { totalOrders, totalProducts, totalReviews, totalUser } =
    adminStats || {};

  const pieData = {
    labels: ["Total Order", "Total Products", "Total Reviews", "Total Users"],
    datasets: [
      {
        label: "Admin Stats ",
        data: [totalOrders, totalProducts, totalReviews, totalUser],
        backgroundColor: [
          "rgba(99, 102, 241, 0.7)",
          "rgba(236, 72, 153, 0.7)",
          "rgba(34, 211, 238, 0.7)",
          "rgba(250, 204, 21, 0.7)",
        ],
      },
    ],
  };
  const options = { responsive: true, maintainAspectRatio: false };
  // Line Chart (Earnings)
  const data = new Array(12).fill(0);
  adminStats?.monthlyEarnings.forEach((entry) => {
    data[entry.month - 1] = entry.earnings;
  });

   const lineData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Monthly Earnings ($)",
        data,
        fill: false,
        borderColor: "#36A2EB",
        backgroundColor: "#36A2EB",
        tension: 0.2,
        
      },
    ],
  };

  return (
    <div className="mt-12 space-y-10">
      <h2 className="text-3xl font-semibold  bg-gradient-to-r from-[#d23141] via-[#ff758c] to-[#d23141] bg-clip-text text-transparent drop-shadow-md">
        Admin Stats Overview
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Pie Chart */}
        <div className="">
          <div className="h-80">
            <Pie data={pieData} options={options} />
          </div>
        </div>

        {/* Line Chart */}
        <div className="">
          <div className="h-80">
            <Line data={lineData} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminStatsChart;
