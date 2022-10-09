import React from "react";
import "./PostDetails.css";
import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const postDetails = useLoaderData();
  const { title, body, userId } = postDetails;
  const navigate = useNavigate();
  const hendelNavigate = () => {
    navigate(`/user/${userId}`);
  };
  return (
    <section className="postDetailsSection">
      <h1>Detais Post </h1>
      <div className="postDetailsCard">
        <h2>{title}</h2>
        <p>{body}</p>
        <button onClick={() => hendelNavigate()} className='postBtn'>Get The Author</button>
      </div>
    </section>
  );
};

export default PostDetails;
