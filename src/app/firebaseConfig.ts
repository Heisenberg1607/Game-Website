// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAA7Fh91fTxyfA59KZwEW3FICyUMqzTKjc",

  authDomain: "mbs-studios.firebaseapp.com",

  projectId: "mbs-studios",

  storageBucket: "mbs-studios.appspot.com",

  messagingSenderId: "621271826129",

  appId: "1:621271826129:web:4d6bb0c745ca7df842cff0",

  measurementId: "G-L3VRL5D8DE",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
