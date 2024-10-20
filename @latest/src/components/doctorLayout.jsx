import { Outlet } from "react-router-dom";
import DoctorNavbar from "./DoctorSection/DoctorNavbar/doctorNavbar";

const DoctorLayout = () => {
  return (
    <>
      <DoctorNavbar />
      <Outlet />
    </>
  );
};

export default DoctorLayout;
