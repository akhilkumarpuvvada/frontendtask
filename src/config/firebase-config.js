
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyANYXkKmTTMfOf5lBreqiNnJphR1VWmZh8",
    authDomain: "chemovator-front.firebaseapp.com",
    projectId: "chemovator-front",
    storageBucket: "chemovator-front.appspot.com",
    messagingSenderId: "267123049752",
    appId: "1:267123049752:web:3a8de05407e96b7dbf4a6d",
    measurementId: "G-575JKV93K5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase;