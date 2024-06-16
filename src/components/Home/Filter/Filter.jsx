/** @format */

import React, { useState } from "react";
import "./Filter.css";

const Filter = (props) => {
  const categories = [
    { id: "all", name: "All", value: "all" },
    { id: "men's clothing", name: "Men's Clothing", value: "men's clothing" },
    { id: "jewelery", name: "Jewelery", value: "jewelery" },
    { id: "electronics", name: "Electronics", value: "electronics" },
    { id: "women's clothing", name: "Women Clothing", value: "women's clothing" },
  ];
  const { productList, setFilteredCategory } = props;
  const [selectedOption, setSelectedOption] = useState("all");

  const handleOptionChange = (e) => {
    const selectedCat = e.target.value;
    const filteredData = productList.filter((product) => {
      if (selectedCat !== "all") return product.category === selectedCat;
      return product;
    });
    setSelectedOption(selectedCat);
    setFilteredCategory(filteredData);
  };
  return (
    <div className='filterContainer'>
      <div className='filterBy'>Filter By:</div>
      {categories.map((cat) => (
        <div className='categories' key={cat.id}>
          <label htmlFor={cat.id}>
            <input
              className='singleCat'
              type='radio'
              id={cat.id}
              name={cat.name}
              value={cat.value}
              checked={selectedOption === cat.value}
              onChange={handleOptionChange}
            />
            <p className='checkmark'>{cat.name}</p>
          </label>
        </div>
      ))}
    </div>
  );
};
export default Filter;
