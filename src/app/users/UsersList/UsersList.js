import React from 'react';
import UserItem from '../UserItem/UserItem.js'
import './userList.css'
const UserList = (props) => {
    const { listOfUsers, onSearchChange, inputValue } = props;
    return (
        <>
        
            <div className="row">
                <div className="col s12">
                    <div className="user-list-search">
                        <input type="text" className="user-list-searchTerm" placeholder="Search user" onChange={onSearchChange} value={inputValue} />
                    </div>
                </div>
            </div>
            <div className="row">
                {listOfUsers.map((user, index) => <UserItem user={user} key={index} />)}
            </div>
        </>
    )
}
export default UserList;