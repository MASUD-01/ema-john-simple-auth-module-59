// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDl35BKJz08t5AwD8i3FTc8BX1RkRJxHBA",
    authDomain: "ema-john-simple-f80fc.firebaseapp.com",
    projectId: "ema-john-simple-f80fc",
    storageBucket: "ema-john-simple-f80fc.appspot.com",
    messagingSenderId: "216782344806",
    appId: "1:216782344806:web:e684cd3f1d9cf306a1d3a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;