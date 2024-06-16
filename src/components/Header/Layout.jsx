/** @format */

import { Outlet, NavLink } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <nav className='navLinks'>
        <NavLink
          className={({ isActive }) => (isActive ? "link active" : "link")}
          to='/'
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "link active" : "link")}
          to='/cart'
        >
          Cart
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
