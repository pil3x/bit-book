import React from 'react';
import { fetchPosts } from '../../../services/postServices';
import PostItem from '../../posts/PostItem/PostItem';

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
        
        if (!posts) {
            return <p>There is no Feed</p>
        }

        return posts.map((post, index) => <PostItem key={index} post={post} hasMeta />)

    }
}

export default Feed;