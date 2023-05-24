import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/images/logo.png";
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <Navbar className="Navbar" expand="lg">
      <Navbar.Brand className="mx-3" href="#home">
        <img src={Logo} className="logo" />
      </Navbar.Brand>
      <Navbar.Toggle className="mx-3" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="mx-3" id="basic-navbar-nav">
        <Nav className="ms-auto navLink">
          <Nav.Link className="text-white" href="/">
            Home
          </Nav.Link>
          <Nav.Link className="text-white" href="/about">
            About
          </Nav.Link>
          <Nav.Link className="text-white" href="/portfolio">
            Portfolio
          </Nav.Link>
          <Nav.Link className="text-white" href="/education">
            Education
          </Nav.Link>
          <Nav.Link className="text-white" href="/experience">
            Experience
          </Nav.Link>
          <Nav.Link className="text-white" href="/contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
