import React from "react";
import { useSelector } from "react-redux";
import { useGetOrderByEmailQuery } from "../../../../Redux/features/orders/orderApi";
import { FaMoneyBillWave, FaCalendarAlt, FaInfoCircle } from "react-icons/fa";

const UserPayments = () => {
  const { user } = useSelector((state) => state.auth.user);
  const { data, isLoading, isError, error } = useGetOrderByEmailQuery(user?.email);
  const orders = data?.data || [];

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-60">
        Loading....
      </div>
    );

  if (isError)
    return (
      <div className="text-red-600 text-center font-semibold">
         Error Fetching Payment: {error?.message || "Something went wrong"}
      </div>
    );

  const totalPayment = orders.reduce((acc, order) => acc + order.amount, 0);

  return (
    <div className="py-6 min-h-screen rounded-lg">
      {/* Header */}
      <div className="mb-8 ">
        <h3 className="text-3xl font-bold text-[#d23141] tracking-wide">
           Payment Overview
        </h3>
        <p className="text-gray-600 mt-2">
          Hi {user?.username || "User"}, here’s a summary of your recent payments.
        </p>
      </div>

      {/* Total Payment Card */}
      <div className="bg-white shadow-xl rounded-xl p-6 mb-8 border-t-4 border-[#d23141] hover:shadow-red-200 transition-all duration-300">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-lg font-semibold text-gray-700">Total Spent</h4>
            <p className="text-3xl font-bold text-[#d23141] mt-1">
              ${totalPayment ? totalPayment.toFixed(2) : 0}
            </p>
          </div>
          <FaMoneyBillWave className="text-[#d23141] text-4xl" />
        </div>
      </div>

      {/* Orders List */}
      <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-100">
        <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <FaInfoCircle className="mr-2 text-[#d23141]" /> Recent Orders
        </h4>
        <ul className="divide-y divide-gray-200">
          {orders.length > 0 ? (
            orders.map((item, index) => (
              <li
                key={index}
                className="py-4 px-3 hover:bg-red-50 transition-all rounded-lg"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h5 className="text-gray-900 font-semibold">
                      Order #{index + 1}
                    </h5>
                    <p className="text-sm text-gray-500 flex items-center">
                      <FaCalendarAlt className="mr-2 text-[#d23141]" />
                      {new Date(item.createdAt).toLocaleString()}
                    </p>
                  </div>
                  <p className="font-bold text-gray-800">
                    ${item.amount.toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm text-gray-600">
                    ID: <span className="text-gray-800">{item._id}</span>
                  </span>
                  <span
                    className={`ml-2 py-[2px] px-3 text-sm rounded-full font-semibold ${
                      item.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : item.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : item.status === "Processing"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              </li>
            ))
          ) : (
            <p className="text-gray-500 text-center py-6">No payment records found </p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default UserPayments;
