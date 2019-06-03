import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import firebase from "firebase/app";

firebase.initializeApp({
  apiKey: "AIzaSyAyXxQijG4eoHvsHEPyPCJTi26roSRXupc",
  authDomain: "truchigram.firebaseapp.com",
  databaseURL: "https://truchigram.firebaseio.com",
  projectId: "truchigram",
  storageBucket: "truchigram.appspot.com",
  messagingSenderId: "887923179137",
  appId: "1:887923179137:web:b8ddab7c7f929486"
});

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
