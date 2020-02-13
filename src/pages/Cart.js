import React, { useContext } from "react";
import { BooksContext } from "../context/BooksContextProvider";
import Book from "../components/books/Book";

const Cart = props => {
  const { cart } = useContext(BooksContext);
  return (
    <div>
      <h2>Cart</h2>
      <div className="books">
        {cart.map(book => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
