import React, { useState } from "react";
import booksState from "../data/books";
import useHandleBooks from "./hook/useHandleBooks";

const BooksContext = React.createContext();

const BooksContextProvider = props => {
  const [books, setBooks] = useState(booksState);
  const [favorites, cart, handleAddBook, handleDeleteBook] = useHandleBooks();

  return (
    <BooksContext.Provider
      value={{
        books,
        favorites,
        cart,
        handleAddBook,
        handleDeleteBook
      }}
    >
      {props.children}
    </BooksContext.Provider>
  );
};

export { BooksContextProvider, BooksContext };
