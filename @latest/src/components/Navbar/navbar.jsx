import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/logo.png";
import "./navbar.css";

const CustomNavbar = () => {
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
        <Navbar.Collapse id="navbarNav" className="justify-content-end align-items-center">
          <Nav className="me-5 gap-4">
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
          </Nav>
          <div className="d-flex gap-2">
            <Link to="/Login" className="log button-U fw-bold">
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
