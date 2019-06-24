import React from 'react';


const TextPost = (props) => {
    const { post } = props;
    return (
        <div className="row">
            <div className="col s12">
                <div className="card post-item-card post-item-text">
                    <h4 className="post-item-title">{post.text}</h4>
                    <p className="post-item-type">{post.type} post</p>
                    <p className="post-item-comment">{post.comments.length} Comments</p>
                </div>
            </div>
        </div>
    )

}

export default TextPost;