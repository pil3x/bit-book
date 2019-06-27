import React from 'react';
import './user-item.css';

const UserItem = (props) => {
    const { user } = props;
    const errorIMG = "https://roundhouse-assets.s3.amazonaws.com/assets/Image/15214-fitandcrop-1200x681.jpg";
    return (
        <>
            <div className="col s4 m4">
                <div className="user-item card">
                    <div className="card-image">
                        {(!user.avatarUrl) ? <img src={errorIMG} alt="img" /> : <img src={user.avatarUrl} alt="img" />}
                        <span className="card-title">{user.getFullName()}</span>
                    </div>
                    <div className="card-content">
                        <p>{user.about}</p>
                        <p>{user.createdAt}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserItem;