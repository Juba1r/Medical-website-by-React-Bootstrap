import { Outlet } from "react-router-dom";
import AdminNavbar from "./Admin/AdminNavbar/AdminNavbar";

const AdminLayout = () => {
  return (
    <>
      <AdminNavbar />
      <div className="main-content">
        <Outlet />
      </div>
    </>
  );
};

export default AdminLayout;
