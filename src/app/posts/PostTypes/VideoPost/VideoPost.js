import React from 'react';

const VideoPost = (props) => {
    const { post } = props;
    return (
        <>
            <iframe id="ytplayer"
                title="ytPlayer"
                type="text/html"
                width="1178" height="500"
                src={post.videoUrl}
                frameBorder="0">
            </iframe>
            <p className="post-item-type">{post.type} post</p>
            <p className="post-item-comment">{post.comments.length} Comments</p>
        </>
    )
}

export default VideoPost;