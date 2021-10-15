import React from "react";
import IconGitHub from "./github";
import IconInstagram from "./instagram";
import IconLinkedin from "./linkedin";
import IconTwitter from "./twitter";
import IconFork from "./fork";
import IconStar from "./star";

export default function Icon({ name }) {
  switch (name) {
    case "GitHub":
      return <IconGitHub />;
    case "Instagram":
      return <IconInstagram />;
    case "Linkedin":
      return <IconLinkedin />;
    case "Twitter":
      return <IconTwitter />;
    case "Fork":
      return <IconFork />;
    case "Star":
      return <IconStar />;
  }
}
