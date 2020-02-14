import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";

const CartBook = props => {
  const { name, id, author, price, info, img_url } = props.book;
  return (
    <div className="cart-book">
      <Link to={`/books/${id}`}>
        <img src={img_url} alt={name} />
      </Link>
      <h3>{name}</h3>
      <p>{author}</p>
      <p>{info}</p>
      <h3>${price}</h3>
      <DeleteIcon
        onClick={() => props.onDelete(id, "cart")}
        style={{ cursor: "pointer", color: "red" }}
      />
    </div>
  );
};

export default React.memo(CartBook);
