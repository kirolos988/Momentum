/** @format */
/* eslint-disable jsx-a11y/img-redundant-alt */

import React from "react";
import "./Home.css";
import Product from "../Product/Product";

const ProductList = (props) => {
  const { products } = props;
  return products.map((product) => (
    <Product key={Math.random()} product={product} />
  ));
};

export default ProductList;
