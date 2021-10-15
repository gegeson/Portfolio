import React, { useState, useEffect } from "react";
import "../css/Footer.scss";
import Icon from "./icons/icon";
import { socialMedia } from "../config";

export default function Footer() {
  const [githubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null,
  });

  useEffect(() => {
    fetch("https://api.github.com/repos/gegeson/Portfolio")
      .then((response) => response.json())
      .then((json) => {
        const { stargazers_count, forks_count } = json;
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count,
        });
      })
      .then(console.log("usereffect!!"))
      .catch((e) => console.error(e));
  }, []);

  return (
    <footer>
      <div className="sns_footer">
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
      <div>
        <a href="https://github.com/gegeson/Portfolio">
          <div>Yuki Shigemasa's Portfolio</div>

          {githubInfo.stars && githubInfo.forks && (
            <div className="github-stats">
              <span>
                <Icon name="Star" />
                <span>star:{githubInfo.stars.toLocaleString()}</span>
              </span>
              <span>
                <Icon name="Fork" />
                <span>fork:{githubInfo.forks.toLocaleString()}</span>
              </span>
            </div>
          )}
        </a>
      </div>
    </footer>
  );
}
