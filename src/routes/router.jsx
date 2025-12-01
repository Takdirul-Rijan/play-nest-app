import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import ToyDetails from "../pages/ToyDetails";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../provider/PrivateRoute";
import MyProfile from "../pages/MyProfile";
import ForgotPassword from "../pages/ForgotPassword";
import OrderNow from "../pages/OrderNow";
import ErrorPage from "../pages/ErrorPage";
import PopularToys from "../components/PopularToys";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("/toydata.json"),
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/all-toy",
        element: <PopularToys></PopularToys>,
        loader: () => fetch("/toydata.json"),
      },
      {
        path: "/toy/:id",
        element: (
          <PrivateRoute>
            <ToyDetails></ToyDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/toydata.json"),
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/order-now",
        element: (
          <PrivateRoute>
            <OrderNow></OrderNow>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/auth/forgot-password",
        element: <ForgotPassword></ForgotPassword>,
      },
    ],
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
