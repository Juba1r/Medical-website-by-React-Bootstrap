import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./components/Home/home";
import About from "./components/AboutUs/aboutUs";
import Location from "./components/Location/location";
import Login from "./components/Login/login";
import Register from "./components/Register/register";
import UserLayout from "./components/userLayout";
import Appointment from "./components/UserSection/Appointment/appointment";
import Doctor from "./components/UserSection/Doctor/doctor";
import ReadAboutDiseases from "./components/UserSection/ReadAboutDiseases/readAboutDis";
import Diagnosis from "./components/UserSection/Diagnosis/diagnosis";
import DoctorsProfile from "./components/UserSection/Doctor/DoctorsProfile/doctorsProfile";
import Profile from "./components/UserSection/Profile/profile";

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
      {
        path: "/Doctor",
        element: <Doctor />,
      },
      {
        path: "/ReadAboutDiseases",
        element: <ReadAboutDiseases />,
      },
      {
        path: "/Diagnosis",
        element: <Diagnosis />,
      },
      {
        path: "/doctorsProfile",
        element: <DoctorsProfile />,
      },
      {
        path: "/Profile",
        element: <Profile />,
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
