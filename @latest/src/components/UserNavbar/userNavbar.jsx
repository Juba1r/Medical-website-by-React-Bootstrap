import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/logo.png";
import "./userNavbar.css";

const userNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="px-2">
      <Container fluid>
        {/* Logo and Name */}
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

        {/* Toggle for mobile view */}
        <Navbar.Toggle aria-controls="navbarNav" />

        {/* Links and buttons */}
        <Navbar.Collapse id="navbarNav" className="justify-content-center">
          <Nav className="d-flex justify-content-center user-nav-links">
            {/* First Row */}
            <div className="user-nav-row mb-2">
              <NavLink to="/Home" className="btn-grad border-0 fw-bold">
                Home
              </NavLink>
              <NavLink to="/AboutUs" className="btn-grad border-0 fw-bold">
                About Us
              </NavLink>
              <NavLink to="/Location" className="btn-grad border-0 fw-bold">
                Location
              </NavLink>
              <NavLink to="/Appointment" className="btn-grad border-0 fw-bold">
                Appointments
              </NavLink>
              <NavLink to="/Doctor" className="btn-grad border-0 fw-bold">
                Doctors
              </NavLink>
              <NavLink
                to="/ReadAboutDiseases"
                className="btn-grad border-0 fw-bold"
              >
                Read about Diseases
              </NavLink>
              <NavLink to="/Diagnosis" className="btn-grad border-0 fw-bold">
                Diagnosis
              </NavLink>
            </div>
          </Nav>

          {/* Login and Profile Icon */}
          <div className="d-flex ms-auto mt-2 align-items-center">
            <i className="bi bi-bell bell-icon gly-rotate-45"></i>
            <Link
              to="/PatientLogin"
              className="text-decoration-none button-usernavbar fw-bold"
            >
              Qkycu
            </Link>
            <Link to="/Profile" className="pro-icon-div cursor-pointer">
              <i className="bi bi-person-circle "></i>
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default userNavbar;
