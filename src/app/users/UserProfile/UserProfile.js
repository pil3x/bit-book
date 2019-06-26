import React from 'react';
import { fetchSingleUser } from '../../../services/usersServices.js'
import './user-profile.css'
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
                <div className="user-profile-main-container">
                    <div class="user-profile-container">
                        <div class="user-profile-image-holder">
                            <img src={user.avatarUrl} alt="img" />
                            <h4>{user.getFullName()}</h4>
                        </div>
                        <p>{user.about}</p>
                        <div class="user-profile-info-holder">
                            <p>Posts</p>
                            <p>Comments</p>
                        </div>
                    </div>
                </div>

            </>

        )
    }
}
export default SingleUser;