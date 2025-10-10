import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { useLoginUserMutation } from "../../Redux/features/auth/authApi";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { setUser } from "../../Redux/features/auth/authSlice";

const Login = () => {
  const [loginUser, { isLoading, error }] = useLoginUserMutation();
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
    
      const response = await loginUser(data).unwrap();
      const {  user } = response;

      dispatch(setUser({user}));
      Swal.fire({
        position: "center",
        icon: "success",
        title: `${response.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    } catch (error) {
      setMessage(error.data.message);
      console.log("Error Failed", error);
    }
  };
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div className="p-6 flex items-center justify-center min-h-screen">
      <div className="bg-white/90 shadow-2xl rounded-2xl p-10 w-full max-w-md border border-gray-100">
        <h2
          className="text-3xl font-bold text-center mb-6"
          style={{ color: "#ed3849" }}
        >
          Please Login!
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ed3849] transition-all duration-200"
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ed3849] transition-all duration-200"
            />
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 text-white font-semibold rounded-lg transition-all duration-300 shadow-md bg-[#ed3849] hover:bg-[#c42635] cursor-pointer"
          >
            Login
          </button>
          {message && <p className="text-sm text-red-500 mt-1">{message}</p>}
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <Link
            to={"/register"}
            style={{ color: "#ed3849" }}
            className="hover:underline italic"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
