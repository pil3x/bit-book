import React from 'react';
import { fetchPosts } from '../../../services/postServices.js';
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