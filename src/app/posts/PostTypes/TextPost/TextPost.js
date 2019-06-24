import React from 'react';

const TextPost = (props) => {
    const { post } = props;
    console.log(post);
    return (
        <div className="row">
            <div className="col s12">
                <div className="card">
                    {post.text}
                </div>
            </div>
        </div>
    )

}

export default TextPost;