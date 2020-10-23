import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase/app"
import firebaseConfig from "./firebaseConfig.json"

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA