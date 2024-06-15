/** @format */
/* eslint-disable jsx-a11y/img-redundant-alt */

import React from "react";
import "./Product.css";
import { useDispatch } from "react-redux";
import { addProduct } from "../../reduxToolkit/cartSlice";

const Product = (props) => {
  const {
    product,
  } = props;
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addProduct(product));
  };
  return (
    <div className='productCard'>
      <a href='/src/components/ProductDetails.jsx' className='productDetails'>
        <img
          src={product.images[0]}
          alt='Description of the image'
          className='productImg'
        />
        <p className='productTitle'>{product.title}</p>
        <p className='productPrice'>${product.price}</p>
      </a>
      <button className='addToCartBtn' onClick={() => handleAddToCart(product)}>
        <p className='addToCartText'>Add to cart</p>
      </button>
    </div>
  );
};

export default Product;
