import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Users.css";
import User from "../User/User";

const Users = () => {
  const users = useLoaderData();
  return (
    <section className="userSection">
      <h2>Hey Wellcome To Our Users Zone</h2>
      <h5>Total Users Are {users.length}</h5>
      <div className="userContainer">
        {
            users.map((user) => {
                const {id} = user;
                return(
                    <User key={id} user={user}></User>
                )
            })
        }
      </div>
    </section>
  );
};

export default Users;
