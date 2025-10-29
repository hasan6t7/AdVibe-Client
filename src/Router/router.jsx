import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import Category from "../Pages/Category/Category";
import FourOFour from "../Components/FourOFour";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import SingleProducts from "../Pages/Shop/ProductDetails/SingleProducts";
import PaymentSuccess from "../Pages/Payment/PaymentSuccess";
import DashLayout from "../Layouts/DashLayout";
import PrivateRoute from "./PrivateRoute";
import DashboardHome from "../Pages/Dashboard/DashHome/DashHome";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <FourOFour></FourOFour>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/shop",
        Component: Shop,
      },
      {
        path: "/shop/:id",
        Component: SingleProducts,
      },
      {
        path: "/category/:categoryName",
        element: <Category></Category>,
      },
      {
        path: "/success",
        element: <PaymentSuccess></PaymentSuccess>,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DashLayout></DashLayout>,
    children: [
      // users
      {
        path: "",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "orders",
        element: <div>Orders</div>,
      },
      {
        path: "profile",
        element: <div>profile</div>,
      },
      {
        path: "payments",
        element: <div>payments</div>,
      },
      {
        path: "reviews",
        element: <div>reviews</div>,
      },

      // admin
      {
        path: "admin",
        element: <div>admin dash</div>,
      },
      {
        path: "add-product",
        element: <div>add product</div>,
      },
      {
        path: "manage-product",
        element: <div>manage product</div>,
      },
      {
        path: "update-product/:id",
        element: <div>update product</div>,
      },
      {
        path: "manage-order",
        element: <div>manage order</div>,
      },
    ],
  },
]);
export default router;
