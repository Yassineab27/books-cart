import React from "react";
import { Link } from "react-router-dom";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <h2>My Books</h2>
      </Link>
      <ul className="navbar-nav">
        <Link to="/" className="option">
          <li>All Books</li>
        </Link>
        <Link to="/favorites" className="option">
          <li>
            <FavoriteIcon />
          </li>
        </Link>
        <Link to="/cart" className="option">
          <li>
            <ShoppingCartIcon />
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
