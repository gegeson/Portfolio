import React from "react";
import { navLinks } from "../config";
import { Row, Col } from "react-bootstrap";
import "../css/Header.scss";

export default function Header() {
  return (
    <ol>
      {navLinks.map(({ name, url }, i) => (
        <li key={i} className="menuNav">
          <a href={url}>{name}</a>
        </li>
      ))}
    </ol>
  );
}
