import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FaEnvelope,
  FaUser,
  FaBriefcase,
  FaCalendarAlt,
  FaEdit,
  FaTimes,
} from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useEditProfileMutation } from "../../../../Redux/features/auth/authApi";
import { setUser } from "../../../../Redux/features/auth/authSlice";
import { useNavigate } from "react-router";
import Loader from "../../../../Components/Loader";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth.user || {});
  const navigate = useNavigate();
console.log(user)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editProfile, { isError, isLoading, error }] = useEditProfileMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: user?.username || "",
      email: user?.email || "",
      bio: user?.bio || "",
      profession: user?.profession || "",
      profileImage: user?.profileImage || "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await editProfile({
        id: user?._id,
        profileData: data,
      }).unwrap();
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Profile Updated Successfully!`,
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch(setUser(response?.data));
      navigate("/login");
      toast.info("Please Login Again!")
      reset();
      setIsModalOpen(false);
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: `Failed to Update Profile`,
        showConfirmButton: false,
        timer: 1500,
      });
      
      console.log(error);
    }
  };
  if (isLoading) return <Loader />;

  if (isError)
    return (
      <div className="text-red-600 text-center font-semibold mt-10">
        Error fetching reviews: {error?.message || "Something went wrong!"}
      </div>
    );
  return (
    <div className=" flex  justify-center  px-4">
      <div className=" w-full  backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8 ">
        {/* Profile Picture */}
        <div className="flex items-start">
          <div className="flex flex-col items-center  space-y-3">
            <img
              src={user?.profileImage || "https://i.ibb.co/4pDNDk1/avatar.png"}
              alt="User Avatar"
              className="w-28 h-28 rounded-full border-4 border-[#d23141] shadow-lg object-cover"
            />
            <h2 className="text-2xl font-semibold tracking-wide">
              {user?.username || "Guest User"}
            </h2>
            <p className="text-sm ">{user?.role || "User"}</p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-white/20"></div>

        {/* User Info */}
        <div className="space-y-4 ">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-blue-400 text-lg" />
            <p className="">{user?.email || "user@example.com"}</p>
          </div>

          <div className="flex items-center gap-3">
            <FaBriefcase className="text-green-400 text-lg" />
            <p className="">{user?.profession || "Not specified"}</p>
          </div>

          <div className="flex items-center gap-3">
            <FaUser className="text-yellow-400 text-lg" />
            <p className="">{user?.bio || "No bio available"}</p>
          </div>

          <div className="flex items-center gap-3">
            <FaCalendarAlt className="text-pink-400 text-lg" />
            <p className="">
              Joined{" "}
              {user?.createdAt
                ? new Date(user.createdAt).toLocaleDateString()
                : "N/A"}
            </p>
          </div>
        </div>

        {/* Edit Button */}
        <div className="mt-8 md:flex md:justify-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex cursor-pointer items-center gap-2 px-6 py-2 text-white rounded-lg bg-gradient-to-r from-[#d23141] to-[#ed3849] hover:from-[#ed3849] hover:to-[#d23141] transition shadow-md font-medium"
          >
            <FaEdit /> Edit Profile
          </button>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 relative animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute cursor-pointer top-3 right-3  text-gray-600 hover:text-[#d23141]"
            >
              <FaTimes size={18} />
            </button>

            <h2 className="text-2xl font-semibold text-[#d23141] mb-6 text-center">
              Edit Profile
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Username */}
              <div>
                <label className="block text-gray-700 mb-1">Username</label>
                <input
                  type="text"
                  {...register("username", { required: true })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d23141]"
                />
                {errors.username && (
                  <p className="text-sm text-red-500 mt-1">
                    Username is required
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d23141]"
                />
                {errors.email && (
                  <p className="text-sm text-red-500 mt-1">Email is required</p>
                )}
              </div>

              {/* Profession */}
              <div>
                <label className="block text-gray-700 mb-1">Profession</label>
                <input
                  type="text"
                  {...register("profession")}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d23141]"
                />
              </div>
              {/* profileImage */}
              <div>
                <label className="block text-gray-700 mb-1">
                  Profile Image Url
                </label>
                <input
                  type="text"
                  {...register("profileImage")}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d23141]"
                />
              </div>

              {/* Bio */}
              <div>
                <label className="block text-gray-700 mb-1">Bio</label>
                <textarea
                  rows="3"
                  {...register("bio")}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#d23141]"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 cursor-pointer py-2 bg-gradient-to-r from-[#d23141] to-[#ed3849] text-white rounded-lg shadow-md hover:from-[#ed3849] hover:to-[#d23141] transition-all"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
