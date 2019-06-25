import React from 'react';
import { fetchOnePost } from '../../../services/postServices';
import VideoPost from '../PostTypes/VideoPost/VideoPost';
import TextPost from '../PostTypes/TextPost/TextPost';
import ImagePost from '../PostTypes/ImagePost/ImagePost'
import PostItem from '../PostItem/PostItem';

class PostSingle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            post: null
        }
    }

    loadPost() {
        const postID = this.props.match.params.id;
        fetchOnePost(postID).then(post => this.setState({ post }))
    }

    componentDidMount() {
        this.loadPost()
    }

    render() {
        const { post } = this.state;

        if (!post) {
            return <p>Loading..</p>
        }

        console.log(post);
        return (
            <div className="row">
                <div className="col s12">
                    <PostItem post={post} isCard={false} />
                </div>
            </div>
        )
    }
}

export default PostSingle;