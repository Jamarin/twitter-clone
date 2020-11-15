import axios from "axios";
import store from '../store'

const AXIOS = axios.create({
    baseURL: 'http://localhost:3000',
});

AXIOS.defaults.headers.common = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
}

AXIOS.interceptors.request.use(function (config) {
    config.headers.Authorization =  `Bearer ${store.getters["user/getToken"]}`
    return config;
});

export default {
    verifyJwt() {
        return AXIOS.get(`/user/verify/`)
    },
    loginUser(email, password) {
        return AXIOS.post('/user/login/', {
            email,
            password
        })
    },
    registerUser(user) {
        return AXIOS.post('/user/create', {
            user
        })
    },
    createTweet(tweet) {
        return AXIOS.post('/tweet/create/', {
            tweet
        })
    },
    getAllTweets() {
        return AXIOS.get('/tweet/all/')
    },
    getTweetsByUser(author) {
        return AXIOS.get(`/tweet/${author}`)
    },
    getUserDataByUsername(username) {
        return AXIOS.get(`/user/username/${username}`)
    }
}