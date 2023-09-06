import React from "react";
import "./Header.css";
import logo from "./assests/pngegg.png";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";

function Header() {
  return (
    <nav className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="logo" />
      </Link>

      <div className="header__search">
        <SearchIcon className="header__searchIcon" />
        <input type="text" className="header__searchInput" />
      </div>

      <div className="header__nav">
        {/* 1st Link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionlineOne">Home</span>
          </div>
        </Link>
        {/* 2nd Link */}
        <Link to="/shop" className="header__link">
          <div className="header__option">
            <span className="header__optionlineOne">Shop</span>
          </div>
        </Link>
        {/* 3rd Link */}
        <Link to="/ourfarms" className="header__link">
          <div className="header__option">
            <span className="header__optionlineOne">Our Farms</span>
          </div>
        </Link>

        {/* 4th Link */}
        <Link to="/about" className="header__link">
          <div className="header__option">
            <span className="header__optionlineOne">About Us</span>
          </div>
        </Link>
      </div>
      <div className="header__icons">
        <div className="header__iconsType">
          <PersonIcon className="header__person" />
        </div>

        <div className="header__iconsType">
          <ShoppingCartIcon className="header__cart" />
        </div>

        {/* <FavoriteIcon className="header__favorite" /> */}
      </div>
    </nav>
  );
}

export default Header;
