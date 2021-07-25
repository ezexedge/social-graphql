import firebase from 'firebase'
require('firebase/auth')

var firebaseConfig = {
    apiKey: "AIzaSyBCEAPiTVXeQghyIL5HWB1JPRWJUE5g0KA",
    authDomain: "gqlreactnode-dbb59.firebaseapp.com",
    projectId: "gqlreactnode-dbb59",
    storageBucket: "gqlreactnode-dbb59.appspot.com",
    messagingSenderId: "663279188969",
    appId: "1:663279188969:web:0120133c0782107201a978"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();

  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  