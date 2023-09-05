import React from "react";
import "./Header.css";
import logo from "./assests/pngegg.png";

function Header() {
  return (
    <nav className="header">
      <img
        className="header__logo"
        src={logo}
        alt="logo"
        width={100}
        height={82}
        loading="lazy"
      />
    </nav>
  );
}

export default Header;
