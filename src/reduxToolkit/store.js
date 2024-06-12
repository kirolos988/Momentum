/** @format */

import { configureStore } from "@reduxjs/toolkit";
import productListSlice from "./productListSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    productList: productListSlice,
    cart: cartSlice,
  },
});

export default store;
