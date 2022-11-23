// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgoYNPVc4qA206VN5MFIhRR8xKkxO28uI",
  authDomain: "chatbot-admin-c3b46.firebaseapp.com",
  projectId: "chatbot-admin-c3b46",
  storageBucket: "chatbot-admin-c3b46.appspot.com",
  messagingSenderId: "493443335359",
  appId: "1:493443335359:web:8e618ce20265c0ae05b20a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export default app;
export const storage = getStorage(app);
export const auth = getAuth(app);
