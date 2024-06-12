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
        state.product.push(action.payload);
        state.diffItems = state.diffItems + 1;
        state.totalItems = state.totalItems + 1;
      } else {
        let count = 0;
        for (let i = 0; i < state.product.length; i++) {
          if (state.product[i].id === action.payload.id) {
            count = count + 1;
            state.totalItems = state.totalItems + 1;
          } else {
            continue;
          }
        }
        if (count === 0) {
          state.product.push(action.payload);
          state.diffItems = state.diffItems + 1;
          state.totalItems = state.totalItems + 1;
        }
      }
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
