import React from "react";

const ShoppingList = function({ day, hour, year }) {
  return <p>I am the shopping list for {`${day} ${hour} ${year}`}</p>;
};

export default ShoppingList;
