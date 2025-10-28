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
    element: (
      <PrivateRoute>
        <DashLayout></DashLayout>
      </PrivateRoute>
    ),
    children: [
      // users
      {
        path: "",
        element: <div>user dash</div>,
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
        element: (
          <PrivateRoute role={"admin"}>
            <div>admin dash</div>
          </PrivateRoute>
        ),
      },
      {
        path: "add-product",
        element: (
          <PrivateRoute role={"admin"}>
            <div>add product</div>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-product",
        element: (
          <PrivateRoute role={"admin"}>
            <div>manage product</div>
          </PrivateRoute>
        ),
      },
      {
        path: "update-product/:id",
        element: (
          <PrivateRoute role={"admin"}>
            <div>update product</div>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-order",
        element: (
          <PrivateRoute role={"admin"}>
            <div>manage order</div>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
