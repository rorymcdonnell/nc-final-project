import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyArrKuNuCyq3aqlI8K288GPR2ASoeK1yuA",
  authDomain: "arpositions-44ac8.firebaseapp.com",
  databaseURL:
    "https://arpositions-44ac8-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "arpositions-44ac8",
  storageBucket: "arpositions-44ac8.appspot.com",
  messagingSenderId: "258478185358",
  appId: "1:258478185358:web:3b5a6772dcc79adca7e2df",
  measurementId: "G-LDE6W3194D",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
