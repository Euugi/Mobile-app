// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYv2rImK5U03cqhRN1FnBO4FkSWee2KqM",
  authDomain: "fir-auth-269b4.firebaseapp.com",
  projectId: "fir-auth-269b4",
  storageBucket: "fir-auth-269b4.appspot.com",
  messagingSenderId: "434827124079",
  appId: "1:434827124079:web:8e0ca31cceb0d114519c9a"
};

// Initialize Firebase
var app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}


require("firebase/firestore");

const auth = firebase.auth()
const db = firebase.firestore;
export { auth };