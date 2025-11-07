import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useUpdateOrderStatusMutation } from "../../../../Redux/features/orders/orderApi";
import Swal from "sweetalert2";

const UpdateOrderModal = ({ order, onClose, onOrderUpdate }) => {
  const [status, setStatus] = useState(order?.status || "Pending");
  const [updateOrderStatus, { isLoading }] = useUpdateOrderStatusMutation();

  const handleUpdateOrder = async () => {
    try {
      await updateOrderStatus({ id: order?._id, status }).unwrap();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Order status updated successfully!",
        showConfirmButton: false,
        timer: 1500,
      });

      onClose();
      onOrderUpdate();
    } catch (error) {
      console.log("Failed to update order:", error);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Failed to update order!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="relative bg-white p-6 rounded-2xl shadow-2xl w-full max-w-md mx-4 border border-gray-200"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute btn btn-xs top-3 right-3 text-gray-500 hover:text-red-600 transition-colors"
          >
            ✕
          </button>

          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Update Order Status
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Modify current order details
            </p>
          </div>

          {/* Order ID */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Order ID
            </label>
            <input
              type="text"
              value={order?.orderId || order?._id}
              readOnly
              className="w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
            />
          </div>

          {/* Customer Email */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Customer Email
            </label>
            <input
              type="text"
              value={order?.email || "N/A"}
              readOnly
              className="w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
            />
          </div>
          {/* Amount */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price
            </label>
            <input
              type="text"
              value={order?.amount || "N/A"}
              readOnly
              className="w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
            />
          </div>

          {/* Order Status */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Order Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ed3849]"
            >
              <option value="Pending">Pending</option>
              <option value="Processing">Processing</option>
              <option value="Shipped">Shipped</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2 cursor-pointer rounded-lg text-gray-700 border border-gray-300 hover:bg-gray-100 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleUpdateOrder}
              disabled={isLoading}
              className={`px-6 cursor-pointer py-2 rounded-lg text-white font-medium transition-all shadow-md ${
                isLoading
                  ? "bg-[#ed3849]/70 cursor-not-allowed"
                  : "bg-[#ed3849] hover:bg-[#d23141]"
              }`}
            >
              {isLoading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default UpdateOrderModal;
