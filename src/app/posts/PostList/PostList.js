import React from 'react';
import PostItem from '../PostItem/PostItem';

const PostList = (props) => {
    const { listOfPosts } = props;
    return (
        <>
            {listOfPosts.map((post, index) => <PostItem key={index} post={post} />)}
        </>
    )
}

export default PostList;