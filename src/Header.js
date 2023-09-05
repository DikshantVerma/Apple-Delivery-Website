import React from "react";
import "./Header.css";
import logo from "./assests/pngegg.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="logo" />
      </Link>

      <div className="headerNav">
        {/* 1st Link */}
        <Link to="/shop" className="header__link">
          <div className="header__Option">
            <span className="header__optionlineOne">Shop</span>
          </div>
        </Link>
        {/* 2nd Link */}
        <Link to="/ourfarms" className="header__link">
          <div className="header__Option">
            <span className="header__optionlineOne">Our Farms</span>
          </div>
        </Link>

        {/* 3rd Link */}
        <Link to="/about" className="header__link">
          <div className="header__Option">
            <span className="header__optionlineOne">About</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
