import React from 'react';


const TextPost = (props) => {
    const { post } = props;
    console.log(post);
    return (
        <div className="row">
            <div className="col s12">
                <div className="card post-item-card post-item-text">
                    <h4 className="post-item-title">{post.text}</h4>
                    <p>{post.type} post</p>
                </div>
            </div>
        </div>
    )

}

export default TextPost;