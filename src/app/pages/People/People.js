import React from 'react';
// import { Link } from 'react-router-dom';
import { fetchUsers } from '../../../services/usersServices.js'
import UserList from '../../users/UsersList/UsersList.js'

class People extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            users: [],
        }
    }
    loadUsers = () => {
        fetchUsers()
            .then(users => this.setState({ users }));

    }

    componentDidMount() {
        this.loadUsers()
    }

    render() {
        const { users } = this.state;
        return (
            <>
                Hello From People
                <UserList listOfUsers={users} />
            </>
        )
    }
}

export default People;