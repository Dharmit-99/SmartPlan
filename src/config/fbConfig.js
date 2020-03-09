import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

var firebaseConfig = {
    apiKey: "AIzaSyAEdszVjqcNZLax3XcwToQKRQOntmifODw",
    authDomain: "smart-plan-database.firebaseapp.com",
    databaseURL: "https://smart-plan-database.firebaseio.com",
    projectId: "smart-plan-database",
    storageBucket: "smart-plan-database.appspot.com",
    messagingSenderId: "42937548826",
    appId: "1:42937548826:web:9c267d546050d79d8951a3",
    measurementId: "G-L1RFJHZYT2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true }); 

  export default firebase;
