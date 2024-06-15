/** @format */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductList = createAsyncThunk(
  "productList/fetchProductList",
  () => {
    return axios
      .get("https://dummyjson.com/products")
      .then((response) => response.data.products);
  },
);

export const producListSlice = createSlice({
  name: "productList",
  initialState: {
    productListData: [],
    // filteredCategory: [],
    loading: false,
    error: "",
  },
  // reducers: {
  //   addTofilteredCategory: (state, action ) => {
  //     state.filteredCategory.push(action.payload);
  //   }
  // },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductList.fulfilled, (state, action) => {
        state.loading = false;
        state.productListData = action.payload;
        state.error = "";
      })
      .addCase(fetchProductList.rejected, (state, action) => {
        state.loading = false;
        state.productListData = [];
        state.error = action.error.message;
      });
  },
});
// export const {addTofilteredCategory} = producListSlice.actions
export default producListSlice.reducer;
