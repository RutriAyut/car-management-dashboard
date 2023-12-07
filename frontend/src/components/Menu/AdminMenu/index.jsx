import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import Logo from "../../Logo";
import Input from "../../Input";
import Button from "../../Button";

import { navLink } from "../style";
import { Link } from "react-router-dom";

function AdminMenu() {
  return (
    <Navbar expand="sm" className="topBg">
      <Container>
        <Link to="/admin">
          <Logo variant={1} color="#CFD4ED" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="align-items-center">
            <Input />
            <Button variant={4}>Search</Button>
            <NavDropdown title="User" id="basic-nav-dropdown">
              <Link to="logout" className={navLink}>
                Logout
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AdminMenu;
