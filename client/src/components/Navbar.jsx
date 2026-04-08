import React from "react";
import Search from "./Search";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav">
      <NavLink to="/" className="logo">
        TEK STORE
      </NavLink>
      <Search />
      <NavLink to="" className="add">
        Add Product
      </NavLink>
    </div>
  );
};

export default Navbar;
