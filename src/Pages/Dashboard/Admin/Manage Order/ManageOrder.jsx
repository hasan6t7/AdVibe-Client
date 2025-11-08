import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  useDeleteOrderByIdMutation,
  useGetAllOrdersQuery,
} from "../../../../Redux/features/orders/orderApi";
import UpdateOrderModal from "./UpdateOrderModal";
import Loader from "../../../../Components/Loader";
import Swal from "sweetalert2";

const ManageOrder = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const { data, isLoading, isError, refetch } = useGetAllOrdersQuery();
  const [deleteOrderById] = useDeleteOrderByIdMutation();

  const orders = data?.data || [];

  // Delete Order
  const handleDeleteOrder = async (orderId) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            await deleteOrderById(orderId).unwrap();
            refetch();

            Swal.fire({
              position: "center",
              icon: "success",
              title: "Order deleted successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
          } catch (error) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: `Something went wrong while deleting! ${error}`,
            });
          }
        }
      });

      
    } catch (error) {
      console.log("Failed to delete order:", error);
      alert(" Failed to delete order");
    }
  };

  //  Edit Order
  const handleEditOrder = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedOrder(null);
    setIsModalOpen(false);
  };

  // Format Date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  //  Status Badge Color
  const getStatusStyle = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "Processing":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "Shipped":
        return "bg-indigo-100 text-indigo-700 border-indigo-200";
      case "Completed":
        return "bg-green-100 text-green-700 border-green-200";
      case "Cancelled":
        return "bg-red-100 text-red-700 border-red-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  if (isLoading) return <Loader />;

  if (isError)
    return (
      <div className="text-center text-red-600 font-medium mt-10">
        Failed to load orders.
      </div>
    );

  return (
    <section className="py-6 min-h-screen">
      <div className="w-full max-w-6xl mx-auto px-2">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold">
              Manage <span className="text-[#ed3849]">Orders</span>
            </h2>
            <p className="text-gray-500 mt-1">
              View, update, and manage all customer orders
            </p>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl shadow-xl bg-white border border-gray-100">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                {["No", "Order ID", "Email", "Status", "Date", "Action"].map(
                  (header, i) => (
                    <th
                      key={i}
                      className="px-2 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider"
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
                    <td className="px-2 py-3 text-sm text-gray-700 font-medium">
                      {index + 1}
                    </td>
                    <td className="px-2 py-3 text-sm text-gray-700 font-mono">
                      
                      {order.orderId || order._id}
                    </td>
                    <td className="px-2 py-3 text-sm text-gray-700">
                      {order?.email}
                    </td>

                    {/* Status */}
                    <td className="px-2 py-3">
                      <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full shadow-sm border ${getStatusStyle(
                          order.status
                        )}`}
                      >
                        {order.status}
                      </span>
                    </td>

                    <td className="px-2 py-3 text-sm text-gray-700">
                      {formatDate(order?.updatedAt)}
                    </td>

                    {/* Action Buttons */}
                    <td className="px-2 py-3 text-sm text-gray-700 flex gap-2">
                      <Link
                        to={`/orders/${order._id}`}
                        className="bg-gray-100 text-gray-700 hover:bg-gray-700 hover:text-white font-semibold px-2 py-1.5 rounded-md shadow-sm transition-all duration-200 cursor-pointer"
                      >
                        View
                      </Link>
                      <button
                        onClick={() => handleEditOrder(order)}
                        className="bg-blue-100 text-blue-700 hover:bg-blue-600 hover:text-white font-semibold px-3 py-1 rounded-md shadow-sm transition-all duration-200 cursor-pointer"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDeleteOrder(order._id)}
                        className="bg-red-100 text-red-700 hover:bg-red-600 hover:text-white font-semibold px-3 py-1 rounded-md shadow-sm transition-all duration-200 cursor-pointer"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="7"
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

      {/* Modal */}
      {isModalOpen && selectedOrder && (
        <UpdateOrderModal
          order={selectedOrder}
          onClose={handleCloseModal}
          onOrderUpdate={refetch}
        />
      )}
    </section>
  );
};

export default ManageOrder;
