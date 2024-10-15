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
            <img src={logo} alt="Logo" className="me-2 logo" />
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
        <Navbar.Collapse id="navbarNav" className="justify-content-end">
          <Nav className="w-100">
            {/* First Row */}
            <div className="nav-row mb-2">
              <NavLink to="/Home" className="btn-grad border-0 fw-bold">
                Home
              </NavLink>
              <NavLink to="/Rreth Nesh" className="btn-grad border-0 fw-bold">
                Rreth Nesh
              </NavLink>
              <NavLink to="/AboutUs" className="btn-grad border-0 fw-bold">
                About Us
              </NavLink>
              <NavLink to="/Location" className="btn-grad border-0 fw-bold">
                Location
              </NavLink>
            </div>

            {/* Second Row */}
            <div className="nav-row">
              <NavLink to="/Appointment" className="btn-grad border-0 fw-bold">
                Appointments
              </NavLink>
              <NavLink to="/Doctor" className="btn-grad border-0 fw-bold">
                Doctors
              </NavLink>
              <NavLink to="/ReadAboutDiseases" className="btn-grad border-0 fw-bold">
                Read about Diseases
              </NavLink>
              <NavLink to="/Diagnosis" className="btn-grad border-0 fw-bold">
                Diagnosis
              </NavLink>
            </div>
          </Nav>

          {/* Login and Profile Icon */}
          <div className="d-flex gap-2">
            <i className="bi bi-bell bell-icon"></i>
            <Link to="/Login" className="log-A button-A fw-bold">
              Qkycu
            </Link>
            <div className="pro-icon-div">
              <i className="bi bi-person-circle"></i>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default userNavbar;
