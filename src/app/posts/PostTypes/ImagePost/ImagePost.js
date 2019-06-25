import React from 'react';
import { Link } from 'react-router-dom';

const ImagePost = (props) => {
    const { post } = props;

    return (
        <>
            <div className="post-single-image card-image">
                <img src={post.imageUrl} alt="" />
            </div>
        </>
    )

}

export default ImagePost;