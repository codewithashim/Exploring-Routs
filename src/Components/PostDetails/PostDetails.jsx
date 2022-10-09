import React from "react";
import "./PostDetails.css";
import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const postDetails = useLoaderData();
  const { title, body } = postDetails;
  return (
    <section className="postDetailsSection">
      <h1>Detais Post </h1>
      <div className="postDetailsCard">
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </section>
  );
};

export default PostDetails;
