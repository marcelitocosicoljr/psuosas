// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXVZloT4hyIbmckkO21HbXFIGklpjiLsI",
  authDomain: "crud-713d8.firebaseapp.com",
  databaseURL: "https://crud-713d8.firebaseio.com",
  projectId: "crud-713d8",
  storageBucket: "crud-713d8.appspot.com",
  messagingSenderId: "178330023757",
  appId: "1:178330023757:web:04b5bd054c9aef9b6c6904",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export default app;
export const storage = getStorage(app);
export const auth = getAuth(app);
