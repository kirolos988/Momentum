/** @format */

// /** @format */

import React, { useEffect, useState } from "react";
import "./Sort.css";

const Sort = (props) => {
  const list = [
    { id: "title", name: "Title", value: "title" },
    { id: "highPrice", name: "Highest Price", value: "highPrice" },
    { id: "LowPrice", name: "Lowest Price", value: "lowPrice" },
    { id: "nothing", name: "No Sort", value: "nothing" },
  ];
  const { products, setSortedList } = props;
  const [selectedSortBy, setSelectedSortBy] = useState("");

  function sortByTitle(products) {
    const newProducts = [...products];
    return newProducts.sort((a, b) => a.title.localeCompare(b.title));
  }

  function sortByHighestPrice(products) {
    const newProducts = [...products];
    return newProducts.sort((a, b) => -a.price + b.price);
  }
  function sortByLowestPrice(products) {
    const newProducts = [...products];
    return newProducts.sort((a, b) => a.price - b.price);
  }

  const handleOptionChange = (e) => {
    const selectedSorting = e.target.value;
    setSelectedSortBy(selectedSorting);

    if (selectedSorting === "title") {
      setSortedList(sortByTitle(products));
    } else if (selectedSorting === "highPrice") {
      setSortedList(sortByHighestPrice(products));
    } else if (selectedSorting === "lowPrice") {
      setSortedList(sortByLowestPrice(products));
    } else {
      setSortedList(products);
    }
  };

  useEffect(() => {
    if (selectedSortBy === "title") {
      setSortedList(sortByTitle(products));
    } else if (selectedSortBy === "highPrice") {
      setSortedList(sortByHighestPrice(products));
    } else if (selectedSortBy === "lowPrice") {
      setSortedList(sortByLowestPrice(products));
    } else {
      setSortedList(products);
    }
  }, [products, selectedSortBy, setSortedList]);

  return (
    <div className='sortContainer'>
      <div className='sortBy'>Sort By:</div>
      {list.map((item) => (
        <div className='list' key={item.id}>
          <label htmlFor={list.id}>
            <input
              className='singleitem'
              type='radio'
              id={item.id}
              name={item.name}
              value={item.value}
              checked={selectedSortBy === item.value}
              onChange={handleOptionChange}
            />
            <p className='checkmark'>{item.name}</p>
          </label>
        </div>
      ))}
    </div>
  );
};

export default Sort;
