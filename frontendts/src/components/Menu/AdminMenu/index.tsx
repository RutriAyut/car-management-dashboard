import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import Logo from "../../Logo";
import Input from "../../Input";
import Button from "../../Button";

import { navLink } from "../style";
import { Link, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function AdminMenu() {
  const username = localStorage.getItem("username");
  const navigate = useNavigate();
  const handleLogOut = () => {
    withReactContent(Swal)
      .fire({
        title: "You want to Logout?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!",
      })
      .then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem("token");
          withReactContent(Swal)
            .fire({
              position: "center",
              icon: "success",
              title: "Berhasil Logout",
              showConfirmButton: false,
              timer: 1500,
            })
            .then(() => {
              navigate("/");
            });
        }
      });
  };

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
            <NavDropdown title={username} id="basic-nav-dropdown">
              <Navbar.Text className={navLink}>
                <Button variant={2} onClick={handleLogOut}>
                  Logout
                </Button>
              </Navbar.Text>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AdminMenu;
