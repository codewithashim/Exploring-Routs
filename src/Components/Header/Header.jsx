import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="navBar">
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/product">Product</Link>
      <Link to="/users">Users</Link>
      <Link to="/post">Post</Link>
    </div>
  );
};

export default Header;
