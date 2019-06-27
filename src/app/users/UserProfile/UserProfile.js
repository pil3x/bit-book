import React from 'react';
import { fetchSingleUser } from '../../../services/usersServices.js'
import './user-profile.css'
import ProfileCommentsCount from './ProfileCommentsCount.js';
import ProfilePostsCount from './../UserProfile/ProfilePostsCount';

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
        const userId = this.props.match.params.id;
        fetchSingleUser(userId)
            .then(user => this.setState({ user }));
    }

    render() {
        const userId = this.props.match.params.id;
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
                            <p>
                                <span className="user-profile-post-num">
                                    <ProfilePostsCount userId={userId} />
                                </span>
                                 Posts
                                </p>
                            <p>
                                <span className="user-profile-comm-num">
                                    <ProfileCommentsCount userId={userId} />
                                </span>
                                 Comments
                                </p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default SingleUser;