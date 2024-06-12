/** @format */

import { configureStore } from "@reduxjs/toolkit";
import productListSlice from "./productListSlice";

const store = configureStore({
  reducer: {
    productList: productListSlice,
  },
});

export default store;