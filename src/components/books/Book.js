import React from "react";

const Book = props => {
  const { name, price, author, img_url } = props.book;
  return (
    <div className="book">
      <h3>{name}</h3>
      <h3>{author}</h3>
      <img src={img_url} alt={name} />
      <h3>{price}</h3>
    </div>
  );
};

export default Book;
