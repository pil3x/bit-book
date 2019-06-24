import React from 'react';

const VideoPost = (props) => {
    const { post } = props;
    return (

        <div className="row">
            <div className="col s12">
                <div className="card">
                    <iframe id="ytplayer"
                        type="text/html"
                        width="1257" height="500"
                        src={post.videoUrl}
                        frameBorder="0">
                    </iframe>
                </div>
            </div>
        </div>
    )
}

export default VideoPost;