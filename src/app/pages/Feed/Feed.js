import React from 'react';
import { fetchPosts } from '../../../services/postServices.js';
import PostItem from '../../posts/PostItem/PostItem.js';
import ImagePost from '../../posts/PostTypes/ImagePost/ImagePost.js';
import VideoPost from '../../posts/PostTypes/VideoPost/VideoPost.js';
import TextPost from '../../posts/PostTypes/TextPost/TextPost.js';
import PostList from '../../posts/PostList/PostList.js';

class Feed extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    loadPosts() {
        fetchPosts().then(posts => this.setState({ posts }))
    }

    getPostType(posts) {
        // const { posts } = this.state;

        posts.forEach(function (post) {
            if (post.type === 'image') {
                return <ImagePost />
            } else if (post.type === 'video') {
                return <VideoPost />
            } else {
                return <TextPost />
            }
        })

    }

    componentDidMount() {
        this.loadPosts();
    }

    render() {
        const { posts } = this.state;
        const { getPostType } = this;

        return (
            <>
                <PostList listOfPosts={posts} postType={getPostType} />
            </>
        )
    }
}

export default Feed;