import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { BooksContext } from "../context/BooksContextProvider";
import Favorites from "../pages/favorites/Favorites";
import ItemCounter from "./ItemCounter";

const Navbar = () => {
  const { showFavorites, setShowFavorites, cart, favorites } = useContext(
    BooksContext
  );
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <h2>My Books</h2>
      </Link>
      <ul className="navbar-nav">
        <Link to="/" className="option option-txt">
          <li>All Books</li>
        </Link>
        <li onClick={setShowFavorites} className="option">
          <FavoriteIcon />
          {favorites.length ? <ItemCounter count={favorites.length} /> : null}
        </li>

        <Link to="/cart" className="option">
          <li>
            <ShoppingCartIcon />
            {cart.length ? <ItemCounter count={cart.length} /> : null}
          </li>
        </Link>
      </ul>
      {showFavorites ? <Favorites /> : null}
    </nav>
  );
};

export default React.memo(Navbar);
