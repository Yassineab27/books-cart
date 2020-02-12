import React, { useState } from "react";
import booksState from "../data/books";

const BooksContext = React.createContext();

const BooksContextProvider = props => {
  const [books, setBooks] = useState(booksState);
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  return (
    <BooksContext.Provider value={{ books, favorites, cart }}>
      {props.children}
    </BooksContext.Provider>
  );
};

export { BooksContextProvider, BooksContext };
