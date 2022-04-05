// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCIGxswqKcYYVzYqM7Sg38tDBgKpSYX6KY",
    authDomain: "clone-8d1c7.firebaseapp.com",
    projectId: "clone-8d1c7",
    storageBucket: "clone-8d1c7.appspot.com",
    messagingSenderId: "750766155498",
    appId: "1:750766155498:web:bced3e96221f1cbfead993",
    measurementId: "G-WTFPSG9SDN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  const auth = firebase.auth();

  export {db, auth};

  