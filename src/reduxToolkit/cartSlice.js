/** @format */

import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    product: [],
    diffItems: 0,
    totalItems: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      if (state.product.length === 0) {
        // DO this if the cart is empty
        state.product.push(action.payload);
        state.diffItems++;
        state.totalItems++;
      } else {
        let itemIndex = state.product.findIndex(
          (product) => product.id === action.payload.id,
        );
        if (itemIndex !== -1) {
          // Do this if the item is added before
          state.totalItems++;
        } else {
          // Do this if the item is the first time to be added
          state.product.push(action.payload);
          state.diffItems++;
          state.totalItems++;
        }
      }
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
