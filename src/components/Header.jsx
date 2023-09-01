import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import { useStateValue } from "../StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <div className="header__logo">
          <StorefrontIcon className="header__logoImage" fontSize="large" />
          <h2 className="header__logoTitle">eCoShop</h2>
        </div>
      </Link>
      <div className="header__search">
        <input
          className="header__searchInput"
          type="text"
          placeholder="search..."
        />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={"/login"} style={{textDecoration: "none"}}>
          <div className="nav__item">
            <span className="nav__itemOne">Hello Guest</span>
            <span className="nav__itemTwo">SignIn</span>
          </div>
        </Link>

        <div className="nav__item">
          <span className="nav__itemOne">Your</span>
          <span className="nav__itemTwo">Shop</span>
        </div>
        <Link to={"/checkout"} style={{ textDecoration: "none" }}>
          <div className="nav__itemBasket">
            <ShoppingBasketIcon />
            <span className="nav__itemTwo nav__itemCount">{basket.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
