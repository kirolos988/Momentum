/** @format */
/* eslint-disable jsx-a11y/img-redundant-alt */

import React from "react";
import "./ProductDetails.css";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../../reduxToolkit/cartSlice";

const ProductDetails = () => {
  const location = useLocation();
  const { product } = location.state || {};
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addProduct(product));
  };
  return (
    <div className='productContainer'>
      <div className='imageContainer'>
        <img
          src={product.images[0]}
          alt='Description of the image'
          className='image'
        />
      </div>
      <div className='detailsContainer'>
        <p className='title'>{product.title}</p>
        <p className='category'>Category: {product.category}</p>
        <p className='price'>Price: ${product.price}</p>
        <p className='description'>
          Product Description:
          <br />
          {product.description}
        </p>
        <button
          className='addToCartBtn'
          onClick={() => handleAddToCart(product)}
        >
          <p className='addToCartText'>Add To Cart</p>
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
