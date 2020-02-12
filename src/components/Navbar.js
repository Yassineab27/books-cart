import React from "react";
import { Link } from "react-router-dom";

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
          <li>Favorites</li>
        </Link>
        <Link to="/cart" className="option">
          <li>Cart</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
