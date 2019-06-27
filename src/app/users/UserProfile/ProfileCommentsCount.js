import React from 'react';
import { fetchUserCommentsNumber } from '../../../services/commentService.js';

class ProfileCommentCounts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            commentsCount: 0
        }
    }
    componentDidMount() {
        this.loadComments();
    }

    loadComments() {
        const { userId } = this.props;

        fetchUserCommentsNumber(userId)
            .then(commentsCount => {
                this.setState({ commentsCount });
            })
    }

    render() {
        const { commentsCount } = this.state;
        return (
            <>
                {commentsCount}
            </>
        )
    }
}

export default ProfileCommentCounts;