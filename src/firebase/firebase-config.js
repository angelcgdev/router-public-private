import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBOfjpG2qfQnvHu0A9Rh3eFMhdKxAP7OoE",
  authDomain: "journal-app-4950f.firebaseapp.com",
  projectId: "journal-app-4950f",
  storageBucket: "journal-app-4950f.appspot.com",
  messagingSenderId: "703268444962",
  appId: "1:703268444962:web:341fe07300d525a195a37b"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  firebase,
}