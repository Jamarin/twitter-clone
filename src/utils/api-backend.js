import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import axios from "axios";

let firebaseApiKey = process.env.FIREBASE_PROJECT_NAME

let firebaseConfig = {
    apiKey: firebaseApiKey,
    authDomain: firebaseApiKey+".firebaseapp.com",
    databaseURL: "https://"+ firebaseApiKey +".firebaseio.com",
    projectId: firebaseApiKey,
    storageBucket: firebaseApiKey+".appspot.com",
    messagingSenderId: "731081875199",
    appId: "1:731081875199:web:9a68d6d39e4d0d39a2f6ca"
};

firebase.initializeApp(firebaseConfig);

const API_DEBUG = 'http://localhost:5001/jeddit-1123/us-central1'
const API_PROD = 'https://us-central1-jeddit-1123.cloudfunctions.net'
const API = (process.env.NODE_ENV === 'production') ? API_PROD : API_DEBUG

const AXIOS = axios.create({
    baseURL: API,
});

AXIOS.defaults.headers.common = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
}

export default {
    loginUser(email, password) {
        return AXIOS.post(`/loginUser`, {
            email,
            password

        });
    },
    createTweet(tweetData) {
        return AXIOS.post('/createTweet', {
            text: tweetData.text,
            author: tweetData.author
        })
    },
    listAllTweetsByUser() {
        return AXIOS.get('/listTweetsByUser')
    },
    registerUser(userData) {
        return AXIOS.post('/registerUser', {
            "email": userData.email,
            "username": userData.username,
            "image": userData.image,
            "password": userData.password,
        })
            .then(registeredUser => {
                console.log(registeredUser)
                return firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password)
            }).catch(err => {
                console.error(err)
                return new Promise(err)
            })
    }
}