import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Text from "../../Text";

import { adminBg, navLink, rightMenu } from "../style";
import { Link } from "react-router-dom";
import { string } from "prop-types";

function RightMenu({ color }) {
  return (
    <div className={adminBg(color)}>
      <Navbar expand="sm" className="d-flex flex-column">
        <Container className="flex-column p-0">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className={rightMenu}>
              <Link to="#" className={navLink}>
                <Text weight="bold" color="#8A8A8A">
                  CARS
                </Text>
              </Link>
              <Link to="/cars" className={navLink}>
                <Text color="#151515" weight="bold">
                  List Cars
                </Text>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

RightMenu.defaultProps = {
  color: "#ffffff",
};

RightMenu.propTypes = {
  color: string,
};

export default RightMenu;
