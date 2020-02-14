import React from "react";
import { Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";

const FavoriteBook = props => {
  const { name, author, info, img_url, id } = props.book;
  return (
    <div className="favBook">
      <Link to={`/books/${id}`}>
        <img className="favBook-img" src={img_url} alt={name} />
      </Link>
      <div className="favBookInfo">
        <h2>{name}</h2>
        <h3>by {author}</h3>
        <span>{info}</span>
      </div>
      <DeleteIcon
        onClick={() => props.onDelete(id, "favorites")}
        style={{ cursor: "pointer", color: "red" }}
      />
    </div>
  );
};

export default React.memo(FavoriteBook);
