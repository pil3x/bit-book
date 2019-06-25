import React from 'react';
// import { Link } from 'react-router-dom';
import { fetchUsers } from '../../../services/usersServices.js'
import UserList from '../../users/UsersList/UsersList.js'

class People extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            users: [],
            inputValue: '',
        }
    }
    loadUsers = () => {
        fetchUsers()
            .then(users => this.setState({ users }));

    }

    onSearchChange(e) {
        this.setState({ inputValue: e.target.value })
    }



    componentDidMount() {
        this.loadUsers()
    }

    render() {
        const { users, onSearchChange } = this.state;
        return (
            <>
                <UserList listOfUsers={users} onSearchChange={onSearchChange} />
            </>
        )
    }
}

export default People;