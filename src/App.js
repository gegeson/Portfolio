import React from "react";
import "./css/App.scss";
import Navigation from "./components/Navigation";
import Social from "./components/Social";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Products from "./components/Products";
import Footer from "./components/Footer";

import Container from "@mui/material/Container";

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Social />
      <Container id="content">
        <Hero />
        <About />
        <Experience />
        <Products />
        <Footer />
      </Container>
    </div>
  );
}
