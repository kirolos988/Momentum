/* eslint-disable jsx-a11y/img-redundant-alt */
/** @format */

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductList } from "../reduxToolkit/productListSlice";

function Home() {
  const productList = useSelector((state) => state.productList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductList());
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <p>Hello Home</p>
      {productList.loading && <div>Loading ...</div>}
      {!productList.loading && productList.error ? (
        <div>Error: {productList.error}</div>
      ) : null}
      {!productList.loading && productList.productListData.length
        ? productList.productListData.map((productList) => (
            <ul key={productList.id}>
              <li>{productList.title}</li>
              <li>{productList.price}</li>
              <img src={productList.images[0]} alt="Description of the image" style={{width: '40px', height: '50px'}}/>
            </ul>
          ))
        : null}
    </div>
  );
}

export default Home;
