import User from '../entities/User.js';
const axios = require('axios');

// Fething Users from API 
const fetchUsers = () => {
    return axios.get('https://book-api.hypetech.xyz/v1/users?_embed=comments', {
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "B1tD3V"
        }
    })
        .then(response => response.data)
        .then(users => {
            return users.map(user => {
                const regDate = new Date(user.createdAt);
                const date = `${regDate.getDate()}.${regDate.getMonth() + 1}.${regDate.getFullYear()}`
                return new User(user.id, user.name.first, user.name.last, user.about.bio, user.avatarUrl, date);
            })
        })
}
// Fetching data for Single User Profile
const fetchSingleUser = (userID) => {
    return axios.get(`https://book-api.hypetech.xyz/v1/users/${userID}`, {
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "B1tD3V"
        }
    })
        .then(response => response.data)
        .then(user => new User(user.id, user.name.first, user.name.last, user.about.bio, user.avatarUrl, user.createdAt, user.comments, user.posts));
}
//Fetching number of posts for Sigle user
const fetchUserPostNumber = (userId) => {
    const params = {
        userId,
        _limit: 0
    }
    return axios.get('https://book-api.hypetech.xyz/v1/posts', {
        params,
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "B1tD3V",
        }
    })
        .then(response => {
            return response.headers['x-total-count'];
        })
}

export { fetchUsers, fetchSingleUser, fetchUserPostNumber };