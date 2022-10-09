import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="navBar">
      <NavLink
        className={({ isActive }) => (isActive ? "active" : undefined)}
        to="/home"
      >
        Home
      </NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/product">Product</NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/post">Post</NavLink>
    </div>
  );
};

export default Header;
