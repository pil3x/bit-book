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

    componentDidMount() {
        this.loadUsers()
    }

    loadUsers = () => {
        fetchUsers()
            .then(users => this.setState({ users }));

    }

    onSearchChange = (e) => {
        this.setState({ inputValue: e.target.value })
    }

    render() {
        const { users, inputValue } = this.state;
        const { onSearchChange } = this;

        const listOfUsers = users.filter((user) => {
            return user.getFullName().toLowerCase().includes(inputValue.toLowerCase());
        });



        return (
            <>
                <UserList listOfUsers={listOfUsers} onSearchChange={onSearchChange} inputValue={inputValue} />
            </>
        )
    }
}

export default People;