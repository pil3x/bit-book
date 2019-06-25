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
export { fetchUsers };