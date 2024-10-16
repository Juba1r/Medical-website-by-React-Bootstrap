import Navbar from "./Navbar/navbar";
import Footer from "./Footer/footer";
import { Outlet } from "react-router-dom";

const layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default layout;
