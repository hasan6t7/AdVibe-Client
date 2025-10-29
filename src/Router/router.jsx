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
import UserOrders from "../Pages/Dashboard/User/orders/UserOrders";
import OrderDetails from "../Pages/Dashboard/User/orders/OrderDetails";
import UserPayments from "../Pages/Dashboard/User/orders/UserPayments";
import UserReviews from "../Pages/Dashboard/User/reviews/UserReviews";
import UserProfile from "../Pages/Dashboard/User/profile/UserProfile";

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
        path: "/orders/:orderId",
        element: <OrderDetails></OrderDetails>,
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
        element: <UserOrders></UserOrders>,
      },
      {
        path: "profile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "payments",
        element: <UserPayments></UserPayments>,
      },
      {
        path: "reviews",
        element: <UserReviews></UserReviews>,
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
