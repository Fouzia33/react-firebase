import firebase from 'firebase/compat/app';
import "firebase/compat/auth";

const app = firebase.initializeApp ({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "react-firebase-22fd2.firebaseapp.com",
  projectId: "react-firebase-22fd2",
  storageBucket: "react-firebase-22fd2.appspot.com",
  messagingSenderId: "961876757867",
  appId: "1:961876757867:web:d60175fe38501b510d102e"
});

export const auth = app.auth();
export default app;