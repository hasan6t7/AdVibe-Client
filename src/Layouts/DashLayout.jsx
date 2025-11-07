import React, { useEffect } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router";
import { AiFillHome } from "react-icons/ai";
import { FaMoneyCheckAlt, FaUsers, FaUserCircle } from "react-icons/fa";
import { BsFileEarmarkText } from "react-icons/bs";
import { TbProgress } from "react-icons/tb";
import { MdRateReview } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/features/auth/authSlice";
const DashLayout = () => {
  const data = useSelector((state) => state.auth.user);
  const user = data?.user;
  const role = user?.role;
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logout());
    navigate("/login");
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const adminNavItems = [
    {
      path: "/dashboard/add-product",
      label: "Add Product",
      icon: <BsFileEarmarkText size={18} />,
    },
    {
      path: "/dashboard/manage-product",
      label: "Manage Product",
      icon: <TbProgress size={18} />,
    },
    {
      path: "/dashboard/manage-order",
      label: "Manage Order",
      icon: <FaMoneyCheckAlt size={18} />,
    },
    {
      path: "/dashboard/manage-users",
      label: "Users",
      icon: <FaUsers size={18} />,
    },
  ];

  const userNavItems = [
    {
      path: "/dashboard/orders",
      label: "Orders",
      icon: <TbProgress size={18} />,
    },
    {
      path: "/dashboard/payments",
      label: "Payments",
      icon: <FaMoneyCheckAlt size={18} />,
    },
    {
      path: "/dashboard/profile",
      label: "Profile",
      icon: <FaUserCircle size={18} />,
    },
    {
      path: "/dashboard/reviews",
      label: "Reviews",
      icon: <MdRateReview size={18} />,
    },
  ];

  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      {/* MAIN CONTENT */}
      <div className="drawer-content flex flex-col">
        {/* Mobile Navbar */}
        <div className="navbar bg-base-300 w-full lg:hidden">
          <div className="flex-none">
            <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2 font-semibold">
            <Link className=" text-4xl font-bold playfair">
              Ad<span className="text-[#d23141]">V</span>ibe
            </Link>
          </div>
        </div>

        {/* Routed Page Content */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>

      {/* SIDEBAR */}
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        <ul className="menu bg-red-50 text-base-content h-screen  w-80 p-4 space-y-1 justify-between">
          <div>
            <div className="mb-5 p-4">
              <Link to={"/"} className=" text-4xl font-bold playfair">
                Ad<span className="text-[#d23141]">V</span>ibe
              </Link>
              <p className="text-xs italic capitalize">{role} dashboard</p>
            </div>
            {/* Universal Dashboard Home */}
            <li className="font-bold text-[16px]">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-[#ed3849] font-semibold"
                    : "hover:text-[#ed3849]"
                }
                to="/dashboard"
                end
              >
                <AiFillHome size={20} /> Dashboard Home
              </NavLink>
            </li>

            {role === "user" && (
              <ul>
                {userNavItems.map((item, index) => (
                  <li className="font-bold text-[16px]" key={index}>
                    <NavLink
                      to={item?.path}
                      className={({ isActive }) =>
                        isActive
                          ? "text-[#ed3849] font-semibold flex items-center gap-2"
                          : "hover:text-[#ed3849] flex items-center gap-2"
                      }
                    >
                      {item?.icon}
                      {item?.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}

            {role === "admin" && (
              <ul>
                {adminNavItems.map((item, index) => (
                  <li className="font-bold text-[16px]" key={index}>
                    <NavLink
                      to={item?.path}
                      className={({ isActive }) =>
                        isActive
                          ? "text-[#ed3849] font-semibold flex items-center gap-2"
                          : "hover:text-[#ed3849] flex items-center gap-2"
                      }
                    >
                      {item?.icon}
                      {item?.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="p-4">
            <button
              onClick={handleLogOut}
              className="btn w-full bg-[#d23141] hover:bg-[#ed3849] px-5 py-1.5 text-white"
            >
              logout
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default DashLayout;
