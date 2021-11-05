import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB1VujFzO7JCbx_I7ZsOGd0OqfFrOzaOTE",
    authDomain: "footstyle-b9847.firebaseapp.com",
    projectId: "footstyle-b9847",
    storageBucket: "footstyle-b9847.appspot.com",
    messagingSenderId: "537237683462",
    appId: "1:537237683462:web:c025842da24b18231b7287",
    measurementId: "G-MF2MYVT3JM"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var auth = firebase.auth();
  var provider = new firebase.auth.GoogleAuthProvider(); 
  export {auth , provider};