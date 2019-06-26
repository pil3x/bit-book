const axios = require('axios');

const fetchLogInToken = (email, password) => {
    return axios.post('https://book-api.hypetech.xyz/v1/auth/login', {
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "B1tD3V",
        },
        body: {
            email: email,
            password: password
        }
    }).then(response => console.log(response))
}

export { fetchLogInToken }