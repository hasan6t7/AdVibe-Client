import React from "react";
import { FaMagnifyingGlass, FaRegUser } from "react-icons/fa6";
import { MdShoppingCart } from "react-icons/md";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar max-w-[1200px] mx-auto p-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="pr-3 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-lg"
          >
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "text-[#ed3849]" : "hover:text-[#ed3849]"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/shop"}
                className={({ isActive }) =>
                  isActive ? "text-[#ed3849]" : "hover:text-[#ed3849]"
                }
              >
                Shop
              </NavLink>
            </li>
          </ul>
        </div>
        <Link className=" text-4xl font-bold playfair">
          Ad<span className="text-[#d23141]">V</span>ibe
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "text-[#ed3849]" : "hover:text-[#ed3849]"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/shop"}
              className={({ isActive }) =>
                isActive ? "text-[#ed3849]" : "hover:text-[#ed3849]"
              }
            >
              Shop
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex items-center gap-6">
        {/* Cart Section */}
        <div className="indicator cursor-pointer relative">
          <MdShoppingCart className="text-2xl" />
          <span className="badge badge-sm indicator-item bg-red-500 text-white border-none">
            8
          </span>
        </div>

        {/* Search Icon */}
        <div className="cursor-pointer">
          <FaMagnifyingGlass className="text-xl" />
        </div>

        {/* User Icon */}
        <Link to={"/login"} className="cursor-pointer">
          <FaRegUser className="text-xl" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
