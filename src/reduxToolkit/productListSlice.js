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
    //  {
    //   id: "",
    //   images: "",
    //   title: "",
    //   description: "",
    //   price: "",
    //   category: "",
    // },
    loading: false,
    error: "",
  },
  reducers: {
    // addUser: (state, action) => {
    //   state.name = action.payload.name;
    //   state.email = action.payload.email;
    // },
    // startUser: (state) => {
    //   state.loading = true;
    // },
    // successUser: (state, action) => {
    //   state.userData = action.payload;
    //   state.loading = null;
    // },
    // errorUser: (state) => {
    //   state.loading = false;
    //   state.error = true;
    // },
  },
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
    // [addUser.pending]: (state) => {
    //   state.loading = true;
    // },
    // [addUser.fulfilled]: (state, action) => {
    //   state.userData = action.payload;
    //   state.loading = false;
    // },
    // [addUser.rejected]: (state) => {
    //   state.loading = false;
    //   state.error = true;
    // },
  },
});

// export const { addUser, startUser, successUser, errorUser } = userSlice.actions;
export default producListSlice.reducer;
