import { Container, Nav, Navbar } from "react-bootstrap";

import { DARK_MODE_CLASSES } from "../types";
import React from "react";

const NavBar: React.FC = () => {
  return (
    <Navbar expand="lg" bg="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#welcome" className="text-success">
          Matthew Winemiller's Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className={DARK_MODE_CLASSES}>
          <Nav className="me-auto">
            <Nav.Link href="#welcome" className="text-light">
              Welcome
            </Nav.Link>
            <Nav.Link href="#aboutMe" className="text-light">
              About Me
            </Nav.Link>
            <Nav.Link
              href="https://github.com/Mrrwmix"
              className="text-light"
              target="_blank"
            >
              GitHub
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/matthew-winemiller-27497b37/"
              className="text-light"
              target="_blank"
            >
              LinkedIn
            </Nav.Link>
            <Nav.Link
              href="http://mattman88.blogspot.com/"
              className="text-light"
              target="_blank"
            >
              Teaching Portfolio
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
