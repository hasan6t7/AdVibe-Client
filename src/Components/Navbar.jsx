import React, { useState } from "react";
import { FaMagnifyingGlass, FaRegUser } from "react-icons/fa6";
import { MdShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router";
import { logout } from "../Redux/features/auth/authSlice";
import { useLogOutUserMutation } from "../Redux/features/auth/authApi";
import CartModal from "../Pages/Shop/CartModal";

const avatar = "https://i.ibb.co.com/gLDzNv8G/avatar.png";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdown] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const hangleCartToogle = () => {
    setIsCartOpen(!isCartOpen);
  };

  const [logOutUser, { isLoading, error }] = useLogOutUserMutation();

  const handleDropdownToogle = () => {
    setIsDropdown(!isDropdownOpen);
  };
  const userDropMenu = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Profile", path: "/dashboard/profile" },
    { label: "Payments", path: "/dashboard/payments" },
    { label: "Orders", path: "/dashboard/orders" },
  ];
  const adminDropMenu = [
    { label: "Dashboard", path: "/dashboard/admin" },
    { label: "Manage Item", path: "/dashboard/manage-product" },
    { label: "All Order", path: "/dashboard/manage-order" },
    { label: "Add Product", path: "/dashboard/add-product" },
  ];

  const handleLogOut = async () => {
    try {
      await logOutUser();
      dispatch(logout());
      navigate("/");
    } catch (err) {
      console.log("error on logot", err);
    }
  };
  const dropdownMenu =
    user && user.role === "admin" ? [...adminDropMenu] : [...userDropMenu];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

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
        <button
          onClick={hangleCartToogle}
          className="indicator cursor-pointer relative"
        >
          <MdShoppingCart className="text-2xl" />
          <span className="badge badge-sm indicator-item bg-red-500 text-white border-none">
            {products.length}
          </span>
        </button>

        {/* Search Icon */}
        <div className="cursor-pointer">
          <FaMagnifyingGlass className="text-xl" />
        </div>

        {user ? (
          <div>
            <img
              onClick={handleDropdownToogle}
              className="size-7 p-0 rounded-full cursor-pointer"
              src={user.profileImage || avatar}
              alt=""
            />
            {isDropdownOpen && (
              <div className="absolute right-0 mt-3 p-4 w-52 bg-white border border-gray-200 shadow-lg rounded-lg z-50">
                <ul className="space-y-2">
                  {dropdownMenu.map((menu, idx) => (
                    <li key={idx}>
                      <Link
                        className="hover:text-[#ed3849] p-2"
                        onClick={() => handleDropdownToogle(false)}
                        to={menu.path}
                      >
                        {menu.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link onClick={handleLogOut} className="p-2 font-medium">
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div>
            {" "}
            {/* User Icon */}
            <Link to={"/login"} className="cursor-pointer">
              <FaRegUser className="text-xl" />
            </Link>
          </div>
        )}
      </div>

      {/* cart modal  */}
      {isCartOpen && (
        <CartModal
          products={products}
          isOpen={isCartOpen}
          onClose={hangleCartToogle}
        ></CartModal>
      )}
    </div>
  );
};

export default Navbar;
