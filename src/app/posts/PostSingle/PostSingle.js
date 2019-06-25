import React from 'react';
import { fetchOnePost } from '../../../services/postServices';

class PostSingle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            post: null
        }
    }

    loadPost() {
        const postID = this.props.match.params.id;
        fetchOnePost(postID).then(post => this.setState({ post }))
    }

    componentDidMount() {
        this.loadPost()
    }

    render() {
        return (
            <>
                this is post single
            </>
        )
    }
}

export default PostSingle;