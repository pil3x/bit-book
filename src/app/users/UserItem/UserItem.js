import React from 'react';

const UserItem = (props) => {
    const { user } = props;
    console.log(props);
    return (
        <>
            <div className="col s4 m4">
                <div className="card">
                    <div className="card-image">
                        <img src={user.avatarUrl} alt="alt" />
                        <span className="card-title">{user.getFullName()}</span>
                    </div>
                    <div className="card-content">
                        <p className="">{user.about}</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default UserItem;