import React from "react";
import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
import "./Posts.css";

const Posts = () => {
  const myPost = useLoaderData();

  return (
    <section className="PostsSection">
      <h1>Get All Post {myPost.length}</h1>
      <div className="postContainer">
        {myPost.map((post) => {
          return <Post key={post.id} post={post}></Post>;
        })}
      </div>
    </section>
  );
};

export default Posts;
