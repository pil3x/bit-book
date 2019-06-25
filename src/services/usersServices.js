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
                return new User(user.id, user.name.first, user.name.last, user.about.bio, user.avatarUrl);
            })
        })
}
export { fetchUsers };