import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAkUIdG38K17JuwprD5x-gyXl9Z4XbRnVU",
    authDomain: "curso-1-react.firebaseapp.com",
    databaseURL: "https://curso-1-react.firebaseio.com",
    projectId: "curso-1-react",
    storageBucket: "curso-1-react.appspot.com",
    messagingSenderId: "523323348537"
  };


  firebase.initializeApp(config);


  export const firebaseAuth = firebase.auth;