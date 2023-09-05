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
          <Route></Route>
          {/* <Header />
          <Home />

          <Footer />
          <FooterCopyright /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
