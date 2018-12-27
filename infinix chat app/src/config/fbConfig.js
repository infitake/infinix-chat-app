import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA8B3V7zBACPi0ekAZEY1l_txvV-rGPRyQ",
    authDomain: "infinity-marioplan.firebaseapp.com",
    databaseURL: "https://infinity-marioplan.firebaseio.com",
    projectId: "infinity-marioplan",
    storageBucket: "infinity-marioplan.appspot.com",
    messagingSenderId: "419391817186"
  };
  firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 