import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./components/Home/home";
import About from "./components/AboutUs/aboutUs";
import Location from "./components/Location/location";
import Login from "./components/Login/login";
import Register from "./components/Register/register";
import Appointment from "./components/UserSection/Appointment/appointment";
import UserLayout from "./components/userLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/Aboutus",
        element: <About />,
      },
      {
        path: "/Location",
        element: <Location />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "/Appointment",
        element: <Appointment />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
