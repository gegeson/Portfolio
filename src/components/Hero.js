import React from "react";
import { MdOutlineWavingHand } from "react-icons/all";
import "../css/Hero.scss";

export default function Top() {
  return (
    <section id="hero">
      <div>
        <h2>Hi, my name is</h2>
      </div>
      <div>
        <h1 className="big-heading">Yuki Shigemasa.</h1>
      </div>
      <div className="hand">
        <MdOutlineWavingHand />
      </div>
    </section>
  );
}
