import React, { useContext } from "react";
import { BooksContext } from "../../context/BooksContextProvider";
import FavoriteBook from "./FavoriteBook";

const Favorites = () => {
  const { favorites, handleDeleteBook } = useContext(BooksContext);
  return (
    <div className="favorites">
      <h2>My Favorites</h2>
      {favorites.map(book => (
        <FavoriteBook key={book.id} book={book} onDelete={handleDeleteBook} />
      ))}
    </div>
  );
};

export default React.memo(Favorites);
