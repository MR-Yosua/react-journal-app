import  firebase  from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBkwvxFJ53mXIWXPYdyMPi5QImPAEnjqT8",
    authDomain: "react-journal-app-6fdc8.firebaseapp.com",
    projectId: "react-journal-app-6fdc8",
    storageBucket: "react-journal-app-6fdc8.appspot.com",
    messagingSenderId: "901752510157",
    appId: "1:901752510157:web:96e61fa9469d2784a93b84"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export{
      db,
      googleAuthProvider,
      firebase
  }