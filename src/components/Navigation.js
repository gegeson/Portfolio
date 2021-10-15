import React from "react";
import { navLinks } from "../config";
import { Navbar, Container, Nav } from "react-bootstrap";
import "../css/Navigation.scss";

export default function Navigation() {
  return (
    <header>
      <Navbar variant="dark" className="menuNav">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="me-auto">
            {navLinks.map(({ name, url }, i) => (
              <Nav.Link key={i} href={url}>
                {name}
              </Nav.Link>
            ))}
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}
