/** @format */

import React from "react";
import "./Header.css";
import Layout from "./Layout";
import { useSelector } from "react-redux";

const Header = () => {
  const totalItems = useSelector(state => state.cart.totalItems)
  return (
    <div className='header'>
      <div className='companyName'>Momentum</div>
      <Layout />
      <p className="totalItems">Total Cart Items: {totalItems}</p>
    </div>
  );
};

export default Header;
