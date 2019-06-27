const axios = require('axios');

const fetchLogInToken = (email, password) => {
    return axios({
        method: 'post',
        url: 'https://book-api.hypetech.xyz/v1/auth/login',
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "B1tD3V",
        },
        data: { email, password }

    })
        .then(response => response.data)
        .then(data => {
            localStorage.setItem("token", data.accessToken)
        })
        .catch(error => Promise.reject(error.response.data.message))
}

const isLoggedIn = () => {

    const logInToken = localStorage.getItem("token");
    const token = logInToken ? logInToken : null;

    return (token === null ? false : true);
}

export { fetchLogInToken, isLoggedIn }



//kad dobijemo response, postavljamo uslov za ispitivanje da li postoje greske, ukoliko postoji greska return

    //ako imamo error  imamo catch() na kraju koji vraca neki error message - na kaju pozvane funkcije u loginform komponenti gde mu setujemo stateu tu poruku iz message
    //taj eror ubacujemo i u state, jer ce nam trebati za rendanje na formi
