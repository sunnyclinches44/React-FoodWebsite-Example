import firebase from 'firebase/compat/app';

import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_APIKEY}`,
  authDomain: `${process.env.REACT_APP_FIREBASE_AUTHDOMAIN}`,
  projectId: `${process.env.REACT_APP_FIREBASE_PROJECTID}`,
  storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGEBUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGINDSENDERID}`,
  appId: `${process.env.REACT_APP_FIREBASE_APPID}`
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const projectStorage = app.storage();
export const projectFireStore = app.firestore();

export const timeStamp = firebase.firestore.FieldValue.serverTimestamp;