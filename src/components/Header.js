import React from "react";
import { navLinks } from "../config";
import { Navbar, Container, Nav } from "react-bootstrap";
import "../css/Header.scss";

export default function Header() {
  return (
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
  );
}
