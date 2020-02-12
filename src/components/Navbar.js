import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <h2>My Books</h2>
      </Link>
      <ul className="navbar-nav">
        <NavLink to="/" className="option-active option">
          <li>All Books</li>
        </NavLink>
        <NavLink to="/favorites" className="option-active option">
          <li>Favorites</li>
        </NavLink>
        <NavLink to="/cart option" className="option-active option">
          <li>Cart</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
