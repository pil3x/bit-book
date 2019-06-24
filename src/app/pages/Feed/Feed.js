import React from 'react';
import { fetchPosts } from '../../../services/postServices.js';

class Home extends React.Component {
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
        console.log(this.state.posts);
        return (
            <>

                this is Home
            </>
        )
    }
}

export default Home;