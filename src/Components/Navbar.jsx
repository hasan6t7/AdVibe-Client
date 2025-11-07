import React, { useState, useEffect, useRef } from "react";
import { FaMagnifyingGlass, FaRegUser } from "react-icons/fa6";
import { MdShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router";
import { logout } from "../Redux/features/auth/authSlice";
import { useLogOutUserMutation } from "../Redux/features/auth/authApi";
import Loader from "./Loader";
import Swal from "sweetalert2";

const avatar = "https://i.ibb.co.com/gLDzNv8G/avatar.png";

const Navbar = ({ onCartToggle }) => {
  const data = useSelector((state) => state.auth?.user);
  const user = data?.user;
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const dropdownRef = useRef(null);

  const [logOutUser, { isLoading, error }] = useLogOutUserMutation();

  const handleDropdownToggle = () => setIsDropdown(!isDropdownOpen);

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleLogOut = async () => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Accept",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            await logOutUser();
            dispatch(logout());
            navigate("/");

            Swal.fire({
              position: "center",
              icon: "success",
              title: "Log Out Successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
          } catch (error) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: `Something went wrong while log out! ${error}`,
            });
          }
        }
      });
    } catch (err) {
      console.log("error on logout", err);
    }
  };

  const userDropMenu =
    user?.role === "admin"
      ? [
          { label: "Dashboard", path: "/dashboard" },
          { label: "Manage Product", path: "/dashboard/manage-product" },
          { label: "Manage Order", path: "/dashboard/manage-order" },
          { label: "Add Product", path: "/dashboard/add-product" },
        ]
      : [
          { label: "Dashboard", path: "/dashboard" },
          { label: "Profile", path: "/dashboard/profile" },
          { label: "Payments", path: "/dashboard/payments" },
          { label: "Orders", path: "/dashboard/orders" },
        ];

  if (isLoading) return <Loader />;
  if (error) return <div>{error}</div>;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 shadow-md border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link
          to="/"
          className="text-3xl font-bold playfair text-gray-900 hover:text-[#d23141] transition-all"
        >
          Ad<span className="text-[#d23141]">V</span>ibe
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 text-lg font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#d23141] border-b-2 border-[#d23141] pb-1"
                  : "hover:text-[#d23141] transition-all"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive
                  ? "text-[#d23141] border-b-2 border-[#d23141] pb-1"
                  : "hover:text-[#d23141] transition-all"
              }
            >
              Shop
            </NavLink>
          </li>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-5">
          {/* Cart */}
          <button
            onClick={onCartToggle}
            className="relative cursor-pointer hover:scale-110 transition-transform"
          >
            <MdShoppingCart className="text-2xl" />
            {products.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#d23141] text-white text-xs rounded-full px-2 py-[2px]">
                {products.length}
              </span>
            )}
          </button>

          {/* Search */}
          <FaMagnifyingGlass className="text-xl cursor-pointer hover:text-[#d23141] transition-colors" />

          {/* User */}
          {user ? (
            <div className="relative" ref={dropdownRef}>
              <img
                onClick={handleDropdownToggle}
                className="w-9 h-9 rounded-full border border-[#d23141] cursor-pointer hover:scale-105 transition-transform"
                src={user.profileImage || avatar}
                alt="user"
              />
              {isDropdownOpen && (
                <div className="absolute right-0 mt-3 w-52 bg-white shadow-xl rounded-xl border border-gray-100 py-3 animate-fadeIn">
                  <ul className="space-y-1">
                    {userDropMenu.map((menu, i) => (
                      <li key={i}>
                        <Link
                          to={menu.path}
                          onClick={() => setIsDropdown(false)}
                          className="block px-4 py-2 hover:bg-gray-100 hover:text-[#d23141] transition-colors"
                        >
                          {menu.label}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <button
                        onClick={handleLogOut}
                        className="btn mx-4 text-left px-4 py-1 bg-[#ed3849] text-white transition-colors"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login">
              <FaRegUser className="text-xl cursor-pointer hover:text-[#d23141]" />
            </Link>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenu ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenu && (
        <div className="lg:hidden bg-white shadow-md border-t animate-slideDown">
          <ul className="flex flex-col gap-2 px-5 py-4 text-lg">
            <NavLink
              to="/"
              onClick={() => setMobileMenu(false)}
              className={({ isActive }) =>
                isActive ? "text-[#d23141]" : "hover:text-[#d23141]"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              onClick={() => setMobileMenu(false)}
              className={({ isActive }) =>
                isActive ? "text-[#d23141]" : "hover:text-[#d23141]"
              }
            >
              Shop
            </NavLink>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
