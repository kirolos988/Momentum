/** @format */
/* eslint-disable jsx-a11y/img-redundant-alt */

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductList } from "../reduxToolkit/productListSlice";
import { addProduct } from "../reduxToolkit/cartSlice";

function Home() {
  const productList = useSelector((state) => state.productList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductList());
    // eslint-disable-next-line
  }, []);
  const handleAddToCart = (productList) => {
    dispatch(addProduct(productList));
  };

  return (
    <div>
      <p>Hello Home</p>
      {productList.loading && <div>Loading ...</div>}
      {!productList.loading && productList.error ? (
        <div>Error: {productList.error}</div>
      ) : null}
      {!productList.loading && productList.productListData.length
        ? productList.productListData.map((productList) => (
            <ul key={Math.random()}>
              <li>{productList.title}</li>
              <li>{productList.price}</li>
              <img
                src={productList.images[0]}
                alt='Description of the image'
                style={{ width: "40px", height: "50px" }}
              />
              <button onClick={() => handleAddToCart(productList)}>
                Add to cart
              </button>
            </ul>
          ))
        : null}
    </div>
  );
}

export default Home;
