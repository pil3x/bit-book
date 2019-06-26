import React from 'react';
import { fetchSingleUser } from '../../../services/usersServices.js'
import './user-profile.css'
import ProfileCommentsCount from './ProfileCommentsCount.js';

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
            .then(user => this.setState({ user }));
    }

    render() {
        const userID = this.props.match.params.id;
        const { user } = this.state;
        if (!user) {
            return <p>Loading...</p>
        }
        return (
            <>
                <div className="user-profile-main-container">
                    <div className="user-profile-container">
                        <div className="user-profile-image-holder">
                            <img src={user.avatarUrl} alt="img" />
                            <h4>{user.getFullName()}</h4>
                        </div>
                        <p>{user.about}</p>
                        <div className="user-profile-info-holder">
                            <p>Posts</p>
                            <p><ProfileCommentsCount userId={userID} /> Comments</p>
                        </div>
                    </div>
                </div>

            </>

        )
    }
}
export default SingleUser;