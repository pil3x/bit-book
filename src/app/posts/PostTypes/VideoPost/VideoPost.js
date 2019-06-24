import React from 'react';

const VideoPost = (props) => {
    const { post } = props;
    return (

        <div className="row">
            <div className="col s12">
                <div className="card post-item-card">
                    <iframe id="ytplayer"
                        title="ytPlayer"
                        type="text/html"
                        width="1178" height="500"
                        src={post.videoUrl}
                        frameBorder="0">
                    </iframe>
                    <p className="post-item-type">{post.type} post</p>
                    <p className="post-item-comment">comments</p>
                </div>
            </div>
        </div>
    )
}

export default VideoPost;