import React from "react";
import "./App.css";
import Footer from "./Footer";
import FooterCopyright from "./FooterCopyright";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/about" element={<AboutPage />} />

          <Route path="/ourfarms" element={<OurFarmsPage />} />

          <Route path="/shop" element={<ShopPage />} />
          {/* <Header />
          <Home />

          <Footer />
          <FooterCopyright /> */}
        </Routes>
      </div>
    </Router>
  );
}

function AboutPage() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

function OurFarmsPage() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

function ShopPage() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
