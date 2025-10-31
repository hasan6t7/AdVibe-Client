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
import DashboardHome from "../Pages/Dashboard/DashHome/DashHome";
import UserOrders from "../Pages/Dashboard/User/orders/UserOrders";
import OrderDetails from "../Pages/Dashboard/User/orders/OrderDetails";
import UserPayments from "../Pages/Dashboard/User/orders/UserPayments";
import UserReviews from "../Pages/Dashboard/User/reviews/UserReviews";
import UserProfile from "../Pages/Dashboard/User/profile/UserProfile";
import ManageUsers from "../Pages/Dashboard/Admin/Manage Users/ManageUsers";
import ManageOrder from "../Pages/Dashboard/Admin/Manage Order/ManageOrder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <FourOFour />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "shop/:id", element: <SingleProducts /> },
      { path: "category/:categoryName", element: <Category /> },
      { path: "success", element: <PaymentSuccess /> },
      { path: "orders/:orderId", element: <OrderDetails /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },

  {
    path: "/dashboard",
    element: <DashLayout />,
    errorElement: <FourOFour />,
    children: [
      // user
      { index: true, element: <DashboardHome /> },
      { path: "orders", element: <UserOrders /> },
      { path: "profile", element: <UserProfile /> },
      { path: "payments", element: <UserPayments /> },
      { path: "reviews", element: <UserReviews /> },

      // admin
      { path: "add-product", element: <div>Add Product</div> },
      { path: "manage-product", element: <div>Manage Product</div> },
      { path: "update-product/:id", element: <div>Update Product</div> },
      { path: "manage-order", element: <ManageOrder /> },
      { path: "manage-users", element: <ManageUsers /> },
    ],
  },
]);

export default router;
