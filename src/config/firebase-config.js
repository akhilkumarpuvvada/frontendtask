

import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyCkmmj7oGhEuLQSsY7DCOB3yjd4V10LOEo",
    authDomain: "myfrontendchemicals.firebaseapp.com",
    projectId: "myfrontendchemicals",
    storageBucket: "myfrontendchemicals.appspot.com",
    messagingSenderId: "107202264990",
    appId: "1:107202264990:web:d5918ae3bd9243b83fa08f",
    measurementId: "G-MYEM5X4TWM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase;