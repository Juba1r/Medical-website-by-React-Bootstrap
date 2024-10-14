import Footer from "./Footer/footer";
import { Outlet } from "react-router-dom";
import UserNavbar from "./UserNavbar/userNavbar";

const userLayout = () => {
  return (
    <>
      <UserNavbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default userLayout;
