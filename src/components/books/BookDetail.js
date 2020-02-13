import React, { useContext } from "react";
import { BooksContext } from "../../context/BooksContextProvider";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";

const BookDetail = props => {
  const { books, handleAddBook } = useContext(BooksContext);
  const book = books.find(bk => bk.id === props.match.params.book_id);
  const { name, author, price, id, description, img_url, info } = book;

  return (
    <div className="book-detail">
      <h2 className="book-detail-name">{name}</h2>
      <img className="book-detail-img" src={img_url} alt={name} />
      <p className="book-detail-author">by {author}</p>
      <p className="book-detail-info">{info}</p>
      <div className="book-detail-btns">
        <button
          onClick={() => handleAddBook(book, "cart")}
          className="btn btn-cart"
        >
          Add to <AddShoppingCartIcon style={{ fontSize: "17px" }} />
        </button>
        <button
          onClick={() => handleAddBook(book, "favorites")}
          className="btn btn-fav"
        >
          Add to Favorite{" "}
          <FavoriteIcon style={{ fontSize: "17px", color: "red" }} />
        </button>
      </div>
      <h2 className="book-detail-price">Price: {price}</h2>
      <h2 className="description">Description: </h2>
      <p className="book-detail-description">{description}</p>
    </div>
  );
};

export default React.memo(BookDetail);
