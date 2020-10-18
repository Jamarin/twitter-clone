import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import axios from "axios";

let firebaseConfig = {
    apiKey: "AIzaSyA9S3nQmXSpvkYANH7kprN-T6K6qa-21DM",
    authDomain: "jeddit-1123.firebaseapp.com",
    databaseURL: "https://jeddit-1123.firebaseio.com",
    projectId: "jeddit-1123",
    storageBucket: "jeddit-1123.appspot.com",
    messagingSenderId: "731081875199",
    appId: "1:731081875199:web:9a68d6d39e4d0d39a2f6ca"
};

firebase.initializeApp(firebaseConfig);

const API_DEBUG = 'http://localhost:5001/jeddit-1123/us-central1'
const API = (process.env.NODE_ENV === 'production') ? 'https://us-central1-jeddit-1123.cloudfunctions.net' : API_DEBUG

const AXIOS = axios.create({
    baseURL: API,
});

AXIOS.defaults.headers.common = {
    "Content-Type": "application/json"
}
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export default {
    loginUser(email, password) {
        return AXIOS.post(`/loginUser`, {
            email,
            password

        });
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