import React from "react";
import "./css/App.scss";
import Header from "./components/Header";
import Social from "./components/Social";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Products from "./components/Products";

import Container from "@mui/material/Container";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Hero />
        <About />
        <Experience />
        <Products />
      </Container>
      <Social />
    </div>
  );
}
