import React from 'react';

const TextPost = (props) => {
    const { post } = props;

    return (
        <h4 className="post-item-title">{post.text}</h4>
    )

}

export default TextPost;