import "./style.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import AppLayout from "./AppLayout";
import RestaurantMenu from "./features/restaurantMenu/RestaurantMenu";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
