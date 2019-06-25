import React from 'react';
import { fetchOnePost } from '../../../services/postServices';
import PostItem from '../PostItem/PostItem';
import CommentList from '../../comments/CommentList/CommentsList';
import './post-single.css';

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
        const { post } = this.state;

        if (!post) {
            return <p>Loading..</p>
        }

        return (
            <div className="row post-single-holder">
                <div className="col s12">
                    <PostItem post={post} isCard={false} />
                    <CommentList post={post} />
                </div>
            </div>
        )
    }
}

export default PostSingle;