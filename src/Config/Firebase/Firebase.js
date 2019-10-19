import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore"
  var firebaseConfig = {
    apiKey: "AIzaSyBRtuuy794W4GS-1mpO24z-Zzk15IfQYSM",
    authDomain: "react-hackathon-24a77.firebaseapp.com",
    databaseURL: "https://react-hackathon-24a77.firebaseio.com",
    projectId: "react-hackathon-24a77",
    storageBucket: "react-hackathon-24a77.appspot.com",
    messagingSenderId: "314337490742",
    appId: "1:314337490742:web:32fc9519ce4213339f2597",
    measurementId: "G-PGFSMN11YE"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase;