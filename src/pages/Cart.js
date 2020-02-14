import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BooksContext } from "../context/BooksContextProvider";
import CartBook from "../pages/CartBook";
import PriceCounter from "./PriceCounter";

const Cart = () => {
  const { cart, handleDeleteBook } = useContext(BooksContext);
  return (
    <div className="cart">
      <h2 className="cart-title">Your Cart</h2>
      <div className="cart-labels">
        <h3>Book</h3>
        <h3>Title</h3>
        <h3>Author</h3>
        <h3>Info</h3>
        <h3>Price</h3>
      </div>
      {cart.map(book => (
        <CartBook key={book.id} book={book} onDelete={handleDeleteBook} />
      ))}
      <PriceCounter cart={cart} />
      {cart.length ? (
        <button className="pay-btn">
          <Link
            style={{
              textDecoration: "none",
              color: "#fff"
            }}
            to="/books/payment"
          >
            Pay Now
          </Link>
        </button>
      ) : null}
    </div>
  );
};

export default React.memo(Cart);
