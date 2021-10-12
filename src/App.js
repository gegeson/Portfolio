import React from "react";
import "./css/App.scss";
import Header from "./components/Header";
import Social from "./components/Social";
import Hero from "./components/Hero";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Social />
      <Hero />
      {/* <Main />
      <Footer /> */}
    </div>
  );
}
