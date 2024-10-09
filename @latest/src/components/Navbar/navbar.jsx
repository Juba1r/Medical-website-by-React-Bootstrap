import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/logo.png";
import "./navbar.css";

const CustomNavbar = () => {
  return (
    <Navbar
      bg="light"
      expand="lg"
      className="d-flex justify-content-betweeen px-2"
    >
      <Container fluid>
        {/* Logo and Name */}
        <Navbar.Brand href="#">
          <div className="d-flex align-items-center">
            <img src={logo} alt="Logo" className="me-2" />
            <div>
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
          className="d-flex justify-content-end gap-5"
        >
          <Nav className="gap-5">
            <Nav.Link href="#" className="btn fw-bold">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="text-primary fw-bold">
              Rreth Nesh
            </Nav.Link>
          </Nav>
          <div className="d-flex gap-2">
            <button className="btn fw-bold">Login</button>
            <button className="btn-reg fw-bold">Register</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
