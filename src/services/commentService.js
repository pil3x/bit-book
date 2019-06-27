import Comment from '../entities/Comment'
const axios = require('axios');

//Fetch comments for specific post, based on its id
const fetchComments = (postId) => {
    return axios.get(`https://book-api.hypetech.xyz/v1/comments?postId=${postId}`, {
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "B1tD3V",
        }
    })
        .then(response => response.data)
        .then(comments => comments.map(comment => new Comment(comment.id, comment.postId, comment.userId, comment.createdAt, comment.isPublic, comment.body)))

}
const fetchUserCommentsNumber = (userId) => {
    const params = {
        userId,
        _limit: 0
    }

    return axios.get(`https://book-api.hypetech.xyz/v1/comments`, {
        params,
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "B1tD3V",
        }
    })
        .then(response => {
            return response.headers['x-total-count']
        })
}
export { fetchComments, fetchUserCommentsNumber }
