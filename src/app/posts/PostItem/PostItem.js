import React from 'react';
// import { Link } from 'react-router-dom';
import ImagePost from '../../posts/PostTypes/ImagePost/ImagePost.js';
import VideoPost from '../../posts/PostTypes/VideoPost/VideoPost.js';
import TextPost from '../../posts/PostTypes/TextPost/TextPost.js';
// import '../../PostItem/post-item.css';
import './post-item.css';

const PostItem = (props) => {
    const { post } = props

    if (post.type === 'image') {
        return <ImagePost post={post} />
    } else if (post.type === 'video') {
        return <VideoPost post={post} />
    } else {
        return <TextPost post={post} />
    }
}

export default PostItem;