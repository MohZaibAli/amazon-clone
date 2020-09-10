import firebase from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyB_2QobGMMoW-uRIj5n2DF9lWckoLqJ3fw",
  authDomain: "clone-mohzaibsoft.firebaseapp.com",
  databaseURL: "https://clone-mohzaibsoft.firebaseio.com",
  projectId: "clone-mohzaibsoft",
  storageBucket: "clone-mohzaibsoft.appspot.com",
  messagingSenderId: "1073222302502",
  appId: "1:1073222302502:web:23178f61721940bb4cdfe7",
  measurementId: "G-RZLRTKYEXL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };