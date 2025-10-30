import React from "react";
import { FaBoxOpen, FaUsers, FaClipboardList, FaStar } from "react-icons/fa";

const AdminStats = ({ adminStats }) => {
  const { totalOrders, totalProducts, totalUser, totalReviews } =
    adminStats || {};

  const stats = [
    {
      label: "Total Orders",
      value: totalOrders || 0,
      icon: (
        <FaClipboardList size={28} className="text-indigo-500 drop-shadow-md" />
      ),
      gradient: "from-indigo-500/30 via-indigo-400/20 to-indigo-500/10",
      textColor: "text-indigo-600",
    },
    {
      label: "Total Products",
      value: totalProducts || 0,
      icon: <FaBoxOpen size={28} className="text-pink-500 drop-shadow-md" />,
      gradient: "from-pink-500/30 via-pink-400/20 to-pink-500/10",
      textColor: "text-pink-600",
    },
    {
      label: "Total Users",
      value: totalUser || 0,
      icon: <FaUsers size={28} className="text-cyan-500 drop-shadow-md" />,
      gradient: "from-cyan-500/30 via-cyan-400/20 to-cyan-500/10",
      textColor: "text-cyan-600",
    },
    {
      label: "Total Reviews",
      value: totalReviews || 0,
      icon: <FaStar size={28} className="text-yellow-400 drop-shadow-md" />,
      gradient: "from-yellow-400/30 via-yellow-300/20 to-yellow-400/10",
      textColor: "text-yellow-500",
    },
  ];

  return (
    <div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`relative bg-gradient-to-br ${item.gradient} rounded-2xl p-6 
            shadow-lg border border-white/10 backdrop-blur-md transition transform 
            hover:scale-[1.03] hover:shadow-2xl duration-300`}
          >
            {/* Background glow */}
            <div className="absolute inset-0 bg-white/5 rounded-2xl pointer-events-none" />

            {/* Icon + Value */}
            <div className="flex items-center justify-between relative z-10">
              <div className="p-3 bg-white/10 rounded-xl">{item.icon}</div>
              <p
                className={`text-4xl font-extrabold ${item.textColor} drop-shadow-md`}
              >
                {item.value}
              </p>
            </div>

            {/* Label */}
            <p
              className={`mt-3 text-lg font-semibold ${item.textColor} tracking-wide relative z-10`}
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminStats;
