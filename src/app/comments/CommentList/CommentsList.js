import React from 'react';
import CommentItem from '../CommentItem/CommentItem';
import './comment-list.css';

const CommentList = (props) => {

    const { comments } = props;

    let content = ""

    if (comments.length === 0) {
        content = <div className="no-comments"><h6>No Comments</h6></div>
    }

    return (
        <>
            <ul className="comm-list-holder">
            {content}

                {comments.map((comment, index) => {
                    return <CommentItem  comment={comment}/>
                })}
            </ul>
        </>
    )

}

export default CommentList;