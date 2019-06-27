import React from 'react';
import { fetchUserPostNumber } from './../../../services/usersServices';

class ProfilePostsCount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postsCount: 0
        }
    }

    componentDidMount() {
        this.loadUserPosts()
    }

    loadUserPosts() {
        const { userId } = this.props;
        fetchUserPostNumber(userId)
            .then(postsCount => this.setState({ postsCount }))
    }

    render() {
        const { postsCount } = this.state;
        return (
            <>
                {postsCount}
            </>

        )
    }

}
export default ProfilePostsCount;