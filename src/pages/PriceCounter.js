import React from "react";

const PriceCounter = props => {
  return (
    <h2 className="total-price">
      Total Price:{" "}
      <span>
        ${props.cart.reduce((acc, book) => acc + book.price, 0).toFixed(2)}
      </span>
    </h2>
  );
};

export default React.memo(PriceCounter);
