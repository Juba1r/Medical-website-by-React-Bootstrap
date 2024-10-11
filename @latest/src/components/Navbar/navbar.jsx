import { Navbar, Nav, Container } from "react-bootstrap";
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
        <Navbar.Collapse id="navbarNav" className="justify-content-end">
          <Nav className="me-5 gap-4">
            <button href="#" className="btn-grad border-0 fw-bold">
              Home
            </button>
            <button href="#" className="btn-grad border-0 fw-bold">
              Rreth Nesh
            </button>
            <button href="#" className="btn-grad border-0 fw-bold">
              About Us
            </button>
            <button href="#" className="btn-grad border-0 fw-bold">
              Location
            </button>
          </Nav>
          <div className="d-flex gap-2">
            <button className="log button-U fw-bold">Login</button>
            <button className="reg button-U fw-bold register-btn">
              Register
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
