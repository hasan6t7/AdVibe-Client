import React from "react";
import { FaShoppingBag, FaStar, FaMoneyBillWave } from "react-icons/fa";



const UserStats = ({ userStats }) => {
  const { totalPurchasedProduct, totalReviews, totalPayment } = userStats || {};

  const stats = [
    {
      label: "Purchased Products",
      value: totalPurchasedProduct || 0,
      icon: (
        <FaShoppingBag size={28} className="text-blue-500 drop-shadow-md" />
      ),
      gradient: "from-blue-500/30 via-blue-400/20 to-blue-500/10",
      textColor: "text-blue-600",
    },
    {
      label: "Total Reviews",
      value: totalReviews || 0,
      icon: <FaStar size={28} className="text-yellow-400 drop-shadow-md" />,
      gradient: "from-yellow-400/30 via-yellow-300/20 to-yellow-400/10",
      textColor: "text-yellow-500",
    },
    {
      label: "Total Payment",
      value: `$ ${totalPayment || 0}`,
      icon: (
        <FaMoneyBillWave size={28} className="text-green-500 drop-shadow-md" />
      ),
      gradient: "from-green-500/30 via-green-400/20 to-green-500/10",
      textColor: "text-green-600",
    },
  ];

  

  return (
    <div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
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
                className={`text-4xl font-extrabold ${item.textColor} drop-shadow-md 
               `}
              >
                {item.value}
              </p>
            </div>

            {/* Label */}
            <p
              className={`mt-3 text-lg font-semibold ${item.textColor} 
            tracking-wide relative z-10`}
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserStats;
