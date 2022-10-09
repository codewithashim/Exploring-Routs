import React from "react";
import "./Post.css";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
    const { title, body, id } = post;
    
    // const navigate = useNavigate();

    // const hendelNavigate = () => {
    //     navigate(`/post/${id}`);
    // }
 
    return (
    <section className="postCard">
      <h4>{title}</h4>
      <p>{body}</p>

      <Link to={`/post/${id}`}>
        <button className="postBtn">Show Details</button>
      </Link>

      {/* <button onClick={()=>hendelNavigate()} className='postBtn'>See More</button> */}
    </section>
  );
};

export default Post;
