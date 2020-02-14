import React, { useContext } from "react";
import { BooksContext } from "../../context/BooksContextProvider";
import Book from "./Book";

const Books = props => {
  const { books } = useContext(BooksContext);

  return (
    <>
      <h2 className="books-title">
        All the Books you need to change your life.
      </h2>
      <div className="books">
        {books.map(book => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </>
  );
};

export default React.memo(Books);
