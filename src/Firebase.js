import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCi0HFatONeBMBJuYNHAsXN7ROU1cjuwbM",
    authDomain: "ecoshop-1942a.firebaseapp.com",
    projectId: "ecoshop-1942a",
    storageBucket: "ecoshop-1942a.appspot.com",
    messagingSenderId: "487180313681",
    appId: "1:487180313681:web:09f7262b522a7e4b988470",
    measurementId: "G-D716MV3XT2"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp);

  const auth = getAuth(firebaseApp);

  export {db , auth};