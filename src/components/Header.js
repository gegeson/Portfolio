import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Header.css";

export default function Header() {
  const menuList = ["About me", "Experience", "Products", "Monologue"];

  return (
    <Row className="">
      {menuList.map((menu, i) => (
        <Col key={i}>
          <p className="menuNav">
            <span className="menuNumber">0{i + 1}.</span> {menu}
          </p>
        </Col>
      ))}
    </Row>
  );
}
