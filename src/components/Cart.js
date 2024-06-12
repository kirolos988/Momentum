/** @format */

import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <p>Hello from cart</p>
      <p>different Items: {cart.diffItems}</p>
      <p>Total Items: {cart.totalItems}</p>
      {cart.product.map((product) => (
        <ul key={Math.random()}>
          <li>{product.title}</li>
          <li>{product.price}</li>
          <li>{product.category}</li>
        </ul>
      ))}
    </div>
  );
};

export default Cart;
