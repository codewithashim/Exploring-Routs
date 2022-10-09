import React from "react";
import "./UserDetails.css";
import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const myuser = useLoaderData();
  const { name, email, phone, website, username } = myuser;

  return (
    <div>
      <h2>Hey Wellcome To Our Users Zone 🖐️</h2>
      <h3>
        Everything Know About <span className="userName">{name}</span>
      </h3>
      <div className="userDetails">
        <h5>Name: {name}</h5>
        <h5>Username: {username}</h5>
        <h5>Email: {email}</h5>
        <h5>Phone: {phone}</h5>
        <h5>Website: {website}</h5>
      </div>
    </div>
  );
};

export default UserDetails;
