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
            <div className="row">
                <div className="container">
                    <div className="card s8">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img src={user.avatarUrl} className="materialboxed" alt="alt" />
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">{user.getFullName()}</span>
                            <p>Bio : {user.about}</p>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}
export default SingleUser;