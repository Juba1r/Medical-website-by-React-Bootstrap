import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/logo.png";
import "./navbar.css";

const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="px-2">
      <Container fluid className="p-0">
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

        <Navbar.Toggle aria-controls="navbarNav " />

        <Navbar.Collapse
          id="navbarNav"
          className="justify-content-end align-items-center"
        >
          <Nav className="me-5 gap-4">
            <NavLink to="/Home" className="btn-grad border-0 fw-bold">
              Home
            </NavLink>
            <NavLink to="/AboutUs" className="btn-grad border-0 fw-bold">
              About Us
            </NavLink>
            <NavLink to="/Location" className="btn-grad border-0 fw-bold">
              Location
            </NavLink>
          </Nav>
          <div className="d-flex">
            <Link to="/PatientLogin" className="log button-U fw-bold">
              Login
            </Link>

            <Link to="/Register" className="reg button-U fw-bold register-btn">
              Register
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
