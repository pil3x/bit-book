import React from 'react';
import UserItem from '../UserItem/UserItem.js'

const UserList = (props) => {
    const { listOfUsers } = props;
    console.log(props);
    return (
        <>
            <div className="row">
                {listOfUsers.map((user, index) => <UserItem user={user} key={index} />)}
            </div>
        </>
    )
}
export default UserList;