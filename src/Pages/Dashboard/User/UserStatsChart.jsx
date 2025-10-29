import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const UserStatsChart = ({ userStats }) => {
  const { totalPurchasedProduct, totalReviews, totalPayment } = userStats || {};

  const data = {
    labels: ["Total Payment", "Total Reviews", "Purchased Products"],
    datasets: [
      {
        label: "User Stats ",
        data: [
          totalPayment || 0,
          totalReviews || 0,
          totalPurchasedProduct  || 0,
        ],
        backgroundColor: [
          "rgba(59, 130, 246, 0.4)", 
          "rgba(234, 179, 8, 0.4)", 
          "rgba(34, 197, 94, 0.4)", 
        ],
        borderColor: [
          "rgb(59, 130, 246)",
          "rgb(234, 179, 8)",
          "rgb(34, 197, 94)",
        ],
        borderWidth: 2,
        borderRadius: 8,
        hoverBackgroundColor: [
          "rgba(59, 130, 246, 0.6)",
          "rgba(234, 179, 8, 0.6)",
          "rgba(34, 197, 94, 0.6)",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
        // labels: {
        //   color: "#374151",
        //   font: {
        //     size: 14,
        //     weight: "bold",
        //   },
        // },
      },
      title: {
        display: true,
        text: " User Activity Overview",
        color: "#111827",
        font: {
          size: 20,
          weight: "bold",
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            if (context.label === "Total Payment") {
              return ` ${context.label}: $${context.raw.toFixed(2)}`;
            }
            return `${context.label}: ${context.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "#374151", font: { size: 13, weight: "bold" } },
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
        ticks: { color: "#374151" },
        grid: { color: "rgba(156, 163, 175, 0.1)" },
      },
    },
    animation: {
      duration: 1200,
      easing: "easeOutBounce",
    },
  };

  return (
    <div className="bg-white/80  p-6 rounded-2xl shadow-lg mt-10">
      <Bar data={data} options={options} />
    </div>
  );
};

export default UserStatsChart;
