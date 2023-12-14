import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../Logo";
import Button from "../../Button";
import { navLink } from "../style";

function Menu() {
  return (
    <Navbar expand="sm" className="topBg">
      <Container className="mainMargin">
        <Navbar.Brand href="/">
          <Logo variant={1} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="align-items-center">
            <Link to="#ourservice" className={navLink}>
              Our Service
            </Link>
            <Link to="#whyus" className={navLink}>
              Why Us
            </Link>
            <Link to="#testimonial" className={navLink}>
              Testimonial
            </Link>
            <Link to="/cars" className={navLink}>
              FAQs
            </Link>
            <Link to="/register">
              <Button>Register</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
