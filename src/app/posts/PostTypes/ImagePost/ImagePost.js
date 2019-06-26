import React from 'react';

const ImagePost = (props) => {
    const { post } = props;

    // console.log(post);
    if (!post.imageUrl) {
        return <img src='https://tinyurl.com/yaqa8yko' alt="" />
    }
    return (
        <>
            <div className="post-single-image card-image">
                <img src={post.imageUrl} alt="" />
            </div>
        </>
    )

}

export default ImagePost;