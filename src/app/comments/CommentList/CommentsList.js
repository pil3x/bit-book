import React from 'react';
import CommentItem from '../CommentItem/CommentItem';
import './comment-list.css';

const CommentList = (props) => {

    const { comments } = props;

    return (
        <ul className="collection comm-list-holder">
            {comments.map((comment, index) => {
                return <CommentItem key={index} comment={comment} />
            })}
        </ul>
    )

}

export default CommentList;