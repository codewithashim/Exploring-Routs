import React from 'react';
import "./Post.css";

const Post = ({post}) => {
    const {title, body} = post;
    return (
        <section className='postCard'>
            <h4>{title}</h4>
            <p>{body.slice(0, 300)}</p>
        </section>
    );
};

export default Post;