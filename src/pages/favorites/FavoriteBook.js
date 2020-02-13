import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

const FavoriteBook = props => {
  const { name, author, info, img_url, id } = props.book;
  return (
    <div className="favBook">
      <img className="favBook-img" src={img_url} alt={name} />
      <div className="favBookInfo">
        <h2>{name}</h2>
        <h3>by {author}</h3>
        <span>{info}</span>
      </div>
      <DeleteIcon
        onClick={() => props.onDelete(id, "favorites")}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default FavoriteBook;
