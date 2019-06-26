import React from 'react';

const VideoPost = (props) => {
    const { post } = props;
    return (
        <iframe id="ytplayer"
            title="ytPlayer"
            type="text/html"
            width="100%" height="500"
            src={post.videoUrl}
            frameBorder="0">
        </iframe>
    )
}

export default VideoPost;