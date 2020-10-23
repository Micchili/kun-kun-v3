import React from 'react';
import 'firebase/storage';
import firebase from "firebase/app";
import { useDownloadURL } from 'react-firebase-hooks/storage'

export const Sample = () => {
  const [value, loading, error] = useDownloadURL(
    firebase.storage().ref().child("watashi.jpg")
  );

  return (
    <>
      {error && <strong>Error: {error}</strong>}
      {loading && <p>ローディング</p>}
      {!loading && value && (
        <img src={value} alt={"sample"} />
      )}
    </>
  );
}

export default Sample;