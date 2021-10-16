import React, { useState, useEffect } from "react";
import "../css/Footer.scss";
import Icon from "./icons/icon";
import { socialMedia } from "../config";

export default function Footer() {
  return (
    <footer>
      <div className="footer-sns">
        <ul>
          {socialMedia &&
            socialMedia.map(({ name, url }, i) => (
              <li key={i}>
                <a href={url} aria-label={name}>
                  <Icon name={name} />
                </a>
              </li>
            ))}
        </ul>
      </div>
      <div className="footer-info">
        <a href="https://github.com/gegeson/Portfolio">
          <div>Yuki Shigemasa&apos;s Portfolio</div>
        </a>
      </div>
    </footer>
  );
}
