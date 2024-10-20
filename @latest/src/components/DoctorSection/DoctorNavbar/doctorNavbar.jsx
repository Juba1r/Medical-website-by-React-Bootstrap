import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../../assets/logo.png";
import doctorpanelprofile from "../../../assets/doctorpanelprofile.png";
import "./doctorNavbar.css";

const DoctorNavbar = () => {
  return (
    <Navbar expand="lg" className="px-2 navbar-bg">
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
        <Navbar.Collapse
          id="navbarNav"
          className="d-flex justify-content-between"
        >
          {/* Empty div for spacing */}
          <div></div>

          {/* Centered Nav Links */}
          <Nav className="mx-auto">
            <NavLink
              to="/DoctorAppointment"
              className="btn-grad border-0 fw-bold mx-2"
            >
              Appointments
            </NavLink>
            <NavLink
              to="/DoctorPost"
              className="btn-grad border-0 fw-bold mx-2"
            >
              Posts
            </NavLink>
            <NavLink
              to="/DoctorPatient"
              className="btn-grad border-0 fw-bold mx-2"
            >
              Patients
            </NavLink>
          </Nav>

          {/* Login and Profile Icon */}
          <div className="d-flex gap-2 mt-2 align-items-center">
            <i className="bi bi-bell bell-icon"></i>
            <Link to="/DoctorLogin" className="log-A button-A fw-bold">
              Log Out
            </Link>
            <Link to="/DoctorProfile" className="doctor-pro-icon-div cursor-pointer">
              <img src={doctorpanelprofile} alt="Doctor's profile image" />
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default DoctorNavbar;
