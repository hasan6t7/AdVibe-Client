import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import Category from "../Pages/Category/Category";
import FourOFour from "../Components/FourOFour";

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
        path: "/category/:categoryName",
        element: <Category></Category>,
      },
    ],
  },
]);
export default router;
