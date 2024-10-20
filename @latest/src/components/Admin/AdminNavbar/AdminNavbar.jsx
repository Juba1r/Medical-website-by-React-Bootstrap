import { useState } from "react"; // Import useState to manage the sidebar state
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../../assets/logo.png";
import "./AdminNavbar.css";

const AdminNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle the sidebar state
  };

  return (
    <div className="admin-layout">
      {/* Top Navbar */}
      <div className="main-content">
        <Navbar bg="light" expand="lg" className="px-2">
          <Container fluid>
            <div className="d-flex align-items-center">
              {/* Hamburger Icon */}
              <i
                className="fa-solid fa-bars fs-2 me-3"
                onClick={toggleSidebar}
                style={{ cursor: "pointer", color: "#000" }}
              ></i>
              <Navbar.Brand href="#">
                <div className="d-flex align-items-center">
                  <Link to="/Home">
                    <img src={logo} alt="Logo" className="me-2 logo" />
                  </Link>
                  <div className="brand-name">
                    <strong>
                      Qendra Klinike Universitare e Kosoves
                      <br />
                      QKUK
                    </strong>
                  </div>
                </div>
              </Navbar.Brand>
            </div>
            <Navbar.Toggle aria-controls="navbarNav" />
            <Navbar.Collapse id="navbarNav" className="justify-content-end">
              <Nav className="me-2 align-items-center">
                <h2 className="fw-bold me-3 text-primary">Admin</h2>
                <Link
                  to="/AdminProfile"
                  className="admin-pro-icon-div cursor-pointer"
                >
                  <i className="bi bi-person-circle"></i>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      {/* Sidebar */}
      <div
        className={`sidebar d-flex flex-column align-items-start ${
          isSidebarOpen ? "open" : "closed"
        }`}
      >
        <nav className="sidebar-nav d-flex">
          <ul className="">
            <li>
              <Link to="/AdminDashboard" className="sidebar-link">
                <i className="sidebar-icon bi bi-speedometer2"></i>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/AdminPatients" className="sidebar-link">
                <i className="sidebar-icon fa-solid fa-bed"></i>
                Patients
              </Link>
            </li>
            <li>
              <Link to="/AdminDoctors" className="sidebar-link">
                <i className="sidebar-icon fa-solid fa-user-doctor"></i>
                Doctors
              </Link>
            </li>
            <li>
              <Link to="/AdminPosts" className="sidebar-link">
                <i className="sidebar-icon fa-solid fa-address-card"></i>
                Posts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default AdminNavbar;
