import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyCuasU1MnY5FsWftpaDLF6G8NZbzO7uX1A",
  authDomain: "kun-kun-a79ef.firebaseapp.com",
  databaseURL: "https://kun-kun-a79ef.firebaseio.com",
  projectId: "kun-kun-a79ef",
  storageBucket: "gs://kun-kun-a79ef.appspot.com",
  messagingSenderId: "375045891683",
  appId: "1:375045891683:web:7bb7c6625d3734b323fa56",
  measurementId: "G-KCHT7NNNZ8"
};

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
