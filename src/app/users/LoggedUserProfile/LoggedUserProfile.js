import React from 'react';
// import UserProfile from '../UserProfile/UserProfile';
import ProfileCommentsCount from '../UserProfile/ProfileCommentsCount'
import ProfilePostsCount from '../UserProfile/ProfilePostsCount';
import {fetchLoggedUser} from '../../../services/usersServices';

class LoggedUserProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null,
        }
    }

    loadUser(){
        fetchLoggedUser()
        .then(user => {
            console.log(user);
            this.setState({user})
        })
    }

    componentDidMount() {
        this.loadUser();
    }
 
    render() {

        const {user} = this.state;
        // console.log(user.about);

        if (!user) {
            return <p>Loading...</p>
        }

        return(
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
                                    <ProfilePostsCount userId={user.id} />
                                </span>
                                 Posts
                                </p>
                            <p>
                                <span className="user-profile-comm-num">
                                    <ProfileCommentsCount userId={user.id} />
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

export default LoggedUserProfile;