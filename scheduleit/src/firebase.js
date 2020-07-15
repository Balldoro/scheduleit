import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDhsjprDzMs2xxkrEG9g7fMOWpZfsr7E_8",
  authDomain: "scheduleit-c8f87.firebaseapp.com",
  databaseURL: "https://scheduleit-c8f87.firebaseio.com",
  projectId: "scheduleit-c8f87",
  storageBucket: "scheduleit-c8f87.appspot.com",
  messagingSenderId: "424461212829",
  appId: "1:424461212829:web:f59fd3bfdd6f038470c874",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
