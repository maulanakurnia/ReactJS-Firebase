import firebase from 'firebase/app';
import 'firebase/auth';
// import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDkIZNUmxsbewCLuXnTLm0ejrTalC2CYu8",
    authDomain: "simple-notes-firebase-705d1.firebaseapp.com",
    databaseURL: "https://simple-notes-firebase-705d1.firebaseio.com",
    projectId: "simple-notes-firebase-705d1",
    storageBucket: "simple-notes-firebase-705d1.appspot.com",
    messagingSenderId: "825992653517",
    appId: "1:825992653517:web:763f26d5b0587bdb321784",
    measurementId: "G-YWNW6R20XQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;