import React from "react";

const ItemCounter = props => {
  return <div className="item-counter">{props.count}</div>;
};

export default React.memo(ItemCounter);
