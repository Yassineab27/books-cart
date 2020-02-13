import React, { useState } from "react";
import booksState from "../data/books";
import useHandleBooks from "./hook/useHandleBooks";
import useToggler from "./hook/useToggler";

const BooksContext = React.createContext();

const BooksContextProvider = props => {
  const [books, setBooks] = useState(booksState);
  const [favorites, cart, handleAddBook, handleDeleteBook] = useHandleBooks();
  const [showFavorites, setShowFavorites] = useToggler();

  return (
    <BooksContext.Provider
      value={{
        books,
        favorites,
        cart,
        handleAddBook,
        handleDeleteBook,
        showFavorites,
        setShowFavorites
      }}
    >
      {props.children}
    </BooksContext.Provider>
  );
};

export { BooksContextProvider, BooksContext };
