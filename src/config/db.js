import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";


const firebaseConfig = {
     apiKey: "AIzaSyA4Xpc9JY6IXFO9NRFCVm9AhVXoojU57fk",
     authDomain: "practice-23642.firebaseapp.com",
     databaseURL: "https://practice-23642-default-rtdb.asia-southeast1.firebasedatabase.app",
     projectId: "practice-23642",
     storageBucket: "practice-23642.appspot.com",
     messagingSenderId: "106197873769",
     appId: "1:106197873769:web:d2d80bcdb699c75c3f9ef8",
     measurementId: "G-44467T3QR5"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const firestoreDb = app.firestore();
const realtimeDb = app.database();
const auth = firebase.auth();

export { realtimeDb, firestoreDb, auth };