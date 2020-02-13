import React, { useContext } from "react";
import { BooksContext } from "../context/BooksContextProvider";
import Book from "../components/books/Book";

const Favorites = props => {
  const { favorites } = useContext(BooksContext);
  return (
    <div>
      <h2>Favorites</h2>
      <div className="books">
        {favorites.map(book => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
