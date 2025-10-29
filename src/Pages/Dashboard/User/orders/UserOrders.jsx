import React from "react";
import { useSelector } from "react-redux";
import { useGetOrderByEmailQuery } from "../../../../Redux/features/orders/orderApi";
import { Link } from "react-router";

const UserOrders = () => {
  const { user } = useSelector((state) => state.auth.user);
  const { data, isLoading } = useGetOrderByEmailQuery(user?.email);
  isLoading && <div>loading...</div>;
  const orders = data?.data || [];

  return (
    <section className="py-6 min-h-screen">
      <div className="w-full max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold">
               Your <span className="text-[#ed3849]">Orders</span>
            </h2>
            <p className="text-gray-500 mt-1">
              Track all your purchases at a glance
            </p>
          </div>
          <button
            className="bg-[#ed3849] hover:bg-[#d23141] text-white text-sm font-semibold px-5 py-2 rounded-md shadow-md transition-all duration-200 cursor-pointer"
            type="button"
          >
            See All
          </button>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto rounded-2xl shadow-xl bg-white border border-gray-100">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                {["No", "Order ID", "Date", "Status", "Total", "View"].map(
                  (header, i) => (
                    <th
                      key={i}
                      className="px-6 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  )
                )}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {orders && orders.length > 0 ? (
                orders.map((order, index) => (
                  <tr
                    key={order._id}
                    className="hover:bg-indigo-50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 text-sm text-gray-700 font-medium">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 font-mono">
                      {order._id}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </td>

                    {/* Status Badge */}
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full shadow-sm ${
                          order.status === "Completed"
                            ? "bg-green-100 text-green-700 border border-green-200"
                            : order.status === "Pending"
                            ? "bg-red-100 text-red-700 border border-red-200"
                            : order.status === "Processing"
                            ? "bg-blue-100 text-blue-700 border border-blue-200"
                            : "bg-yellow-100 text-yellow-700 border border-yellow-200"
                        }`}
                      >
                        {order.status.charAt(0).toUpperCase() +
                          order.status.slice(1)}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-sm font-semibold text-gray-800">
                      ${order.amount.toFixed(2)}
                    </td>

                    <td className="px-6 py-4 text-center">
                      <Link
                        to={`/orders/${order._id}`}
                        className="inline-block text-[#ed3849] hover:border-b hover:text-[#d23141] font-medium text-sm transition-colors duration-200"
                      >
                        View Order →
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center text-gray-500 py-6 text-sm italic"
                  >
                    No orders found 
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default UserOrders;
