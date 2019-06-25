import React from 'react';
import { Link } from 'react-router-dom';
import ImagePost from '../../posts/PostTypes/ImagePost/ImagePost.js';
import VideoPost from '../../posts/PostTypes/VideoPost/VideoPost.js';
import TextPost from '../../posts/PostTypes/TextPost/TextPost.js';
import './post-item.css';

const PostItem = (props) => {
    const { post, isCard = true } = props;

    const itemStyle = isCard ? "card post-item-card" : ""

    let content = ""

    if (post.type === 'image') {
        content = <ImagePost post={post} />
    } else if (post.type === 'video') {
        content = <VideoPost post={post} />
    } else {
        content = <TextPost post={post} />
    }

    return (
        <div className="row">
            <div className="col s12">
                <Link to={`/posts/${post.id}`}>
                    <div className={`${itemStyle} post-item-text`}>
                        {content}
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default PostItem;