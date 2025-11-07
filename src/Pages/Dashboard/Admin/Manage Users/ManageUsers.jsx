import React, { useEffect, useState } from "react";
import {
  useDeleteUserMutation,
  useGetAllUsersQuery,
} from "../../../../Redux/features/auth/authApi";
import { Link } from "react-router";
import UpdateUserModal from "./UpdateUserModal";
import Loader from "../../../../Components/Loader";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const { data, isLoading, refetch } = useGetAllUsersQuery();
  const users = data?.data || [];
  const [deleteUser] = useDeleteUserMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    refetch();
  }, [refetch]);

  if (isLoading) {
    return <Loader />;
  }

  const handleDeleteUser = async (id) => {
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
            await deleteUser(id).unwrap();

            Swal.fire({
              position: "center",
              icon: "success",
              title: "User deleted successfully!",
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
      console.log("Delete user : ", error);
    }
  };

  const handleEditRole = async (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };

  return (
    <section className="py-6 min-h-screen">
      <div className="w-full max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold">
              Manage <span className="text-[#ed3849]">Users</span>
            </h2>
            <p className="text-gray-500 mt-1">
              View, edit, and manage all registered users
            </p>
          </div>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto rounded-2xl shadow-xl bg-white border border-gray-100">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                {["No", "Email", "Role", "Edit", "Delete"].map((header, i) => (
                  <th
                    key={i}
                    className="px-6 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {users && users.length > 0 ? (
                users.map((user, index) => (
                  <tr
                    key={user._id}
                    className="hover:bg-indigo-50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 text-sm text-gray-700 font-medium">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 font-mono">
                      {user.email}
                    </td>

                    {/* Role Badge */}
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full shadow-sm border ${
                          user.role === "admin"
                            ? "bg-green-100 text-green-700 border-green-200"
                            : "bg-yellow-100 text-yellow-700 border-yellow-200"
                        }`}
                      >
                        {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                      </span>
                    </td>

                    {/* Edit Button */}
                    <td className="px-6 py-4 text-sm text-gray-700">
                      <button
                        onClick={() => handleEditRole(user)}
                        className="bg-blue-100 text-blue-700 hover:bg-blue-600 hover:text-white font-semibold px-4 py-1.5 rounded-md shadow-sm transition-all duration-200 cursor-pointer"
                        type="button"
                      >
                        Edit
                      </button>
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-700">
                      <button
                        onClick={() => handleDeleteUser(user._id)}
                        className="bg-red-100 text-red-700 hover:bg-red-600 hover:text-white font-semibold px-4 py-1.5 rounded-md shadow-sm transition-all duration-200 cursor-pointer"
                        type="button"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center text-gray-500 py-6 text-sm italic"
                  >
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <UpdateUserModal
          user={selectedUser}
          onClose={handleCloseModal}
          onRoleUpdate={refetch}
        />
      )}
    </section>
  );
};

export default ManageUsers;
