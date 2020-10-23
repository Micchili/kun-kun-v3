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
