/** @format */
/* eslint-disable jsx-a11y/img-redundant-alt */

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductList } from "../../reduxToolkit/productListSlice";
import "./Home.css";
import ProductList from "./ProductList";
import Filter from "./Filter/Filter";
import Sort from "./Sort/Sort";

function Home() {
  const productList = useSelector((state) => state.productList);
  const [filteredCategory, setFilteredCategory] = useState();
  const [sortedList, setSortedList] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductList());
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ flex: 1 }}>
      <Filter
        productList={productList.productListData}
        setFilteredCategory={setFilteredCategory}
        setSortedList={setSortedList}
      />
      <Sort
        products={
          filteredCategory?.length > 0
            ? filteredCategory
            : productList.productListData
        }
        setSortedList={setSortedList}
        filteredCategory={filteredCategory}
      />

      <div className='homeContainer'>
        {productList.loading && <div className='loading'>Loading ...</div>}
        {!productList.loading && productList.error ? (
          <div className='error'>Error: {productList.error}</div>
        ) : null}

        {!productList?.loading && productList.productListData?.length ? (
          <ProductList
            products={
              sortedList?.length > 0
                ? sortedList
                : filteredCategory?.length > 0
                ? filteredCategory
                : productList.productListData
            }
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Home;
