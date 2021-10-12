import React from "react";
import { navLinks } from "../config";
import { Row, Col } from "react-bootstrap";
import "../css/Header.scss";

export default function Header() {
  return (
    <Row className="">
      {navLinks.map(({ name, url }, i) => (
        <Col key={i}>
          <ol>
            <li>
              <a href={url} className="menuNav">
                {name}
              </a>
            </li>
          </ol>
        </Col>
      ))}
    </Row>
  );
}
