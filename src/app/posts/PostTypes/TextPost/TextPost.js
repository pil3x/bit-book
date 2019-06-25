import React from 'react';
import { Link } from 'react-router-dom';

const TextPost = (props) => {
    const { post } = props;

    return (
        <>
            <h4 className="post-item-title">{post.text}</h4>
            <p className="post-item-type">{post.type} post</p>
            <p className="post-item-comment">{post.comments.length} Comments</p>
        </>
    )

}

export default TextPost;