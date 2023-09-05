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
          <Route path="/about" element={AbouPage}>
            <h1>About us and what we do!</h1>
          </Route>

          <Route path="/ourfarms">
            <h1>All about our farms</h1>
          </Route>

          <Route path="/shop">
            <h1>Shop our Store</h1>
          </Route>
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
