const axios = require('axios');

const fetchRegisterToken = (name, email, password) => {
    return axios({
        method: 'post',
        url: 'https://book-api.hypetech.xyz/v1/auth/register',
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "B1tD3V",
        },
        data: { name, email, password }

    })
        .then(response => response.data)
        .then(data => {
            console.log(data);
            localStorage.setItem("registerToken", data.accessToken)
        })
        .catch(error => Promise.reject(error.response.data.message))
}

export { fetchRegisterToken }