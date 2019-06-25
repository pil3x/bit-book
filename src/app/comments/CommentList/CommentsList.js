import React from 'react';
import { fetchComments } from '../../../services/commentService';
import CommentItem from '../CommentItem/CommentItem';

class CommentList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: []
        }
        // console.log(props);
    }
    componentDidMount() {
        this.loadComments();
    }

    loadComments() {
        const { post } = this.props;

        fetchComments(post.id).then(comments => this.setState({ comments }))
    }


    render() {
        const { comments } = this.state;
        return (
            <ul className="collection">
                {comments.map((comment, index) => {
                    return <CommentItem key={index} comment={comment} />
                })}
            </ul>
        )
    }
}

export default CommentList;