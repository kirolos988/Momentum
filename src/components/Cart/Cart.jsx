/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAll } from "../../reduxToolkit/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const removeAllItems = () => {
    dispatch(removeAll());
  };
  return (
    <div style={{ flex: 1 }}>
      <p>Hello from cart</p>
      <p>different Items: {cart.diffItems}</p>
      <p>Total Items: {cart.totalItems}</p>
      <div>
        {cart.product.map((product) => (
          <div key={Math.random()}>
            <ul>
              <li>{product.title}</li>
              <li>{product.price}</li>
              <li>{product.category}</li>
            </ul>
          </div>
        ))}
        <button onClick={() => removeAllItems()}>Remove All</button>
      </div>
    </div>
  );
};

export default Cart;
