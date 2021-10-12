import React from "react";
import { socialMedia } from "../config";
import Icon from "./icons/icon";
import "./css/Social.scss";

export default function Social() {
  return (
    <div className="sns">
      <ul>
        {socialMedia.map(({ url, name }, i) => (
          <li key={i}>
            <a href={url} aria-label={name} target="_blank" rel="noreferrer">
              <Icon name={name} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
