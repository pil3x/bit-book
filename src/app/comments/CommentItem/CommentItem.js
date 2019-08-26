import React from 'react';
import { fetchSingleUser } from '../../../services/usersServices';
import './comment-item.css';


class CommentItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null,
        }

    }

    componentDidMount() {
        this.loadUserData();
    }

    loadUserData() {
        const userId = this.props.comment.userId;

        fetchSingleUser(userId)
            .then(user => this.setState({ user }))
    }

    render() {
        const { comment } = this.props;
        const { user } = this.state;
        
        if (!user) {
            return <p>Loading...</p>
        }

        return (
            <>
                <li className="comm-item">
                    <div className="comm-item-user">
                        <img src={user.avatarUrl} alt="" className="circle" />
                        <p className="comm-item-name">{user.first}</p>
                    </div>
                    <p className="comm-item-body">{comment.body}</p>
                </li>
            </>
        )
    }
}

export default CommentItem;