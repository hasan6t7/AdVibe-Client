

import React, { useState } from "react";

import { useUpdateUserRoleMutation } from "../../../../Redux/features/auth/authApi";
import { AnimatePresence , motion } from "framer-motion";

const UpdateUserModal = ({ user, onClose, onRoleUpdate }) => {
  const [role, setRole] = useState(user?.role);
  const [updateUserRole, { isLoading }] = useUpdateUserRoleMutation();

  const handleUpdateRole = async () => {
    try {
      await updateUserRole({ userId: user?._id, role }).unwrap();
      alert(" Role Updated Successfully!");
      onClose();
      onRoleUpdate();
    } catch (error) {
      console.log("Failed to update role: ", error);
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
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition-colors"
          >
            ✕
          </button>

          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Edit User Role
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Update permissions for this user
            </p>
          </div>

          {/* Email Field */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="text"
              value={user?.email}
              readOnly
              className="w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ed3849]"
            />
          </div>

          {/* Role Selection */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Role
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ed3849]"
            >
              <option value="user">user</option>
              <option value="admin">admin</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg text-gray-700 border border-gray-300 hover:bg-gray-100 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleUpdateRole}
              disabled={isLoading}
              className={`px-6 py-2 rounded-lg text-white font-medium transition-all shadow-md ${
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

export default UpdateUserModal;
