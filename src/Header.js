import React from "react";
import "./Header.css";
import logo from "./assests/pngegg.png";

function Header() {
  return (
    <nav className="header">
      <a href="http://localhost:3000/">
        <img className="header__logo" src={logo} alt="logo" />
      </a>
    </nav>
  );
}

export default Header;
