import React from 'react';
import { Link } from 'react-router-dom';

const ImagePost = (props) => {
    const { post } = props;
    return (

        <div className="row">
            <div className="col s12">
                <Link to={`/posts/${post.id}`}>
                    <div className="card post-item-card">
                        <div className="card-image">
                            <img src={post.imageUrl} alt="" />
                        </div>
                        <p className="post-item-type">{post.type} post</p>
                        <p className="post-item-comment">{post.comments.length} Comments</p>
                    </div>
                </Link>
            </div>
        </div>
    )

}

export default ImagePost;