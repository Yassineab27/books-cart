import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { BooksContext } from "../context/BooksContextProvider";
import Favorites from "../pages/favorites/Favorites";

const Navbar = () => {
  const { showFavorites, setShowFavorites } = useContext(BooksContext);
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <h2>My Books</h2>
      </Link>
      <ul className="navbar-nav">
        <Link to="/" className="option">
          <li>All Books</li>
        </Link>
        <li onClick={setShowFavorites} className="option">
          <FavoriteIcon />
        </li>

        <Link to="/cart" className="option">
          <li>
            <ShoppingCartIcon />
          </li>
        </Link>
      </ul>
      {showFavorites ? <Favorites /> : null}
    </nav>
  );
};

export default Navbar;
