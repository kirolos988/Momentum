/** @format */

import { configureStore } from "@reduxjs/toolkit";
import productListSlice from "./productListSlice";
import cartSlice from "./cartSlice";
import { saveState, loadState } from "./localStorage";
// import { clearState } from "./localStorage";

const preloadedState = loadState();

const store = configureStore({
  reducer: {
    productList: productListSlice,
    cart: cartSlice,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

// window.addEventListener('beforeunload', clearState);

export default store;
