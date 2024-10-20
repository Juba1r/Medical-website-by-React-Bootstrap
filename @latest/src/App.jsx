import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./components/Home/home";
import About from "./components/AboutUs/aboutUs";
import Location from "./components/Location/location";
import PatientLogin from "./components/Login/patientLogin";
import AdminLogin from "./components/Login/AdminLogin";
import DoctorLogin from "./components/Login/DoctorLogin";
import Register from "./components/Register/register";
import UserLayout from "./components/userLayout";
import Appointment from "./components/UserSection/Appointment/appointment";
import Doctor from "./components/UserSection/Doctor/doctor";
import ReadAboutDiseases from "./components/UserSection/ReadAboutDiseases/readAboutDis";
import Diagnosis from "./components/UserSection/Diagnosis/diagnosis";
import DoctorsProfile from "./components/UserSection/Doctor/DoctorsProfile/doctorsProfile";
import Profile from "./components/UserSection/Profile/profile";
import ReadMoreDiseases from "./components/UserSection/ReadAboutDiseases/ReadMoreDiseases/readMoreDis";
import AdminDashboard from "./components/Admin/AdminDashboard/adminDashboard";
import AdminLayout from "./components/AdminLayout";
import AdminPatients from "./components/Admin/AdminPatients/AdminPatients";
import AdminDoctors from "./components/Admin/AdminDoctors/AdminDoctors";
import AdminPosts from "./components/Admin/AdminPosts/adminPosts";
import AdminProfile from "./components/Admin/AdminProfile/adminProfile";
import SetSchedule from "./components/Admin/SetSchedule/setSchedule";
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
        path: "/PatientLogin",
        element: <PatientLogin />,
      },
      {
        path: "/DoctorLogin",
        element: <DoctorLogin />,
      },
      {
        path: "/AdminLogin",
        element: <AdminLogin />,
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
      {
        path: "/ReadMoreDiseases",
        element: <ReadMoreDiseases />,
      },
    ],
  },
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        path: "/AdminDashboard",
        element: <AdminDashboard />,
      },
      {
        path: "/AdminPatients",
        element: <AdminPatients />,
      },
      {
        path: "/AdminDoctors",
        element: <AdminDoctors />,
      },
      {
        path: "/AdminPosts",
        element: <AdminPosts />,
      },
      {
        path: "/AdminProfile",
        element: <AdminProfile />,
      },
      {
        path: "/SetSchedule",
        element: <SetSchedule />,
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
