import Post from '../entities/Post.js';
const axios = require('axios');


// Fetching posts from API
const fetchPosts = () => {
    return axios.get('https://book-api.hypetech.xyz/v1/posts?_embed=comments', {
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "B1tD3V",
        }
    })
        .then(response => response.data)
        .then(data => {
            return data.map(post => {

                return new Post(post.id, post.createdAt, post.isPublic, post.type, post.videoUrl, post.imageUrl, post.text, post.comments)
            })
        })
}

// Fetching one post based on it's ID

const fetchOnePost = (postId) => {
    return axios.get(`https://book-api.hypetech.xyz/v1/posts/${postId}`, {
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "B1tD3V",
        }
    })
        .then(response => response.data)
        .then(post => new Post(post.id, post.createdAt, post.isPublic, post.type, post.videoUrl, post.imageUrl, post.text, post.comments))

}

export { fetchPosts, fetchOnePost }