import React from "react";
import "./User.css";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { name, email, phone, website, username, id } = user;
  return (
    <section className="singelUserSection">
      <h3>Name: {name}</h3>
      <h5>
        Username: <Link to={`/user/${id}`}>{username}</Link>
      </h5>
      <h5>Email: {email}</h5>
      <h5>Phone: {phone}</h5>
      <h5>Website: {website}</h5>
    </section>
  );
};

export default User;
