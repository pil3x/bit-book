import React from 'react';
import { fetchOnePost } from '../../../services/postServices';
import PostItem from '../PostItem/PostItem';
import CommentList from '../../comments/CommentList/CommentsList';
import { fetchComments } from '../../../services/commentService';
import './post-single.css';

class PostSingle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            post: null,
            comments: [],
        }
    }

    loadPageData() {
        const postId = this.props.match.params.id;

        fetchOnePost(postId)
            .then(post => this.setState({ post }))

        fetchComments(postId)
            .then(comments => this.setState({ comments }))
    }

    componentDidMount() {
        this.loadPageData()
    }

    render() {
        const { post, comments } = this.state;

        if (!post) {
            return <p>Loading..</p>
        }

        return (
            <div className="row post-single-holder">
                <div className="col s12">
                    <PostItem post={post} isCard={false} />
                    <CommentList comments={comments} />
                </div>
            </div>
        )
    }
}

export default PostSingle;