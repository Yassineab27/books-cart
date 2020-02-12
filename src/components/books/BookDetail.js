import React, { useContext } from "react";
import { BooksContext } from "../../context/BooksContextProvider";

const BookDetail = props => {
  const { books } = useContext(BooksContext);
  const book = books.find(bk => bk.id === props.match.params.book_id);
  const { name, author, price, id, description, img_url, info } = book;
  return (
    <div className="book-detail">
      <h2 className="book-detail-name">{name}</h2>
      <img className="book-detail-img" src={img_url} alt={name} />
      <p className="book-detail-author">by {author}</p>
      <p className="book-detail-info">{info}</p>
      <div className="book-detail-btns">
        <button className="btn btn-cart">Add to cart</button>
        <button className="btn btn-fav">Add to Favorite</button>
      </div>
      <h2 className="book-detail-price">Price: {price}</h2>
      <h2 className="description">Description: </h2>
      <p className="book-detail-description">{description}</p>
    </div>
  );
};

export default BookDetail;
