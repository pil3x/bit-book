import React from 'react';

const ImagePost = (props) => {
    const { post } = props;
    return (

        <div className="row">
            <div className="col s12">
                <div className="card">
                    <div className="card-image">
                        <img src={post.imageUrl} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ImagePost;