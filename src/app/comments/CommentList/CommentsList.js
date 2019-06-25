import React from 'react';

import CommentItem from '../CommentItem/CommentItem';

class CommentList extends React.Component {

    render() {
        const { comments } = this.props;

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