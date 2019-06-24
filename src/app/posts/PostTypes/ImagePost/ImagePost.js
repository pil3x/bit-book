import React from 'react';

const ImagePost = (props) => {
    const { post } = props;
    return (

        <div className="row">
            <div className="col s12">
                <div className="card post-item-card">
                    <div className="card-image">
                        <img src={post.imageUrl} alt="" />
                    </div>
                    <p className="post-item-type">{post.type} post</p>
                    <p className="post-item-comment">comments</p>
                </div>
            </div>
        </div>
    )

}

export default ImagePost;