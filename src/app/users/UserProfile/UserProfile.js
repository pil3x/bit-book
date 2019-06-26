import React from 'react';
import { fetchSingleUser } from '../../../services/usersServices.js'

class SingleUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null,
        }
    }

    componentDidMount() {
        this.loadSingleUser();
    }

    loadSingleUser() {
        const userID = this.props.match.params.id;
        fetchSingleUser(userID)
            .then(user => {
                return this.setState({ user });
            })
    }

    render() {
        const { user } = this.state;
        if (!user) {
            return <p>Loading...</p>
        }
        return (
            <>

            </>

        )
    }
}
export default SingleUser;