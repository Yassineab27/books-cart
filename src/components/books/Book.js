import React from "react";
import { Link } from "react-router-dom";

const Book = props => {
  const { name, price, author, img_url, id } = props.book;
  return (
    <div className="book">
      <Link to={`/books/${id}`} className="book-name">
        <h3>{name}</h3>
      </Link>
      <h3 className="book-author">by {author}</h3>
      <Link to={`/books/${id}`}>
        <img className="book-img" src={img_url} alt={name} />
      </Link>
      <h3 className="book-price">{price}</h3>
    </div>
  );
};

export default Book;
