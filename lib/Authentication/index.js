import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

import { query, getDocs, collection, where, addDoc } from "firebase/firestore";

import { db, auth } from "../firebase";
import { getByQuery } from "../services/databaseService";
import { useUpdatePassword } from "react-firebase-hooks/auth";

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const [firstName = "", lastName = ""] = user.displayName.split("");
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        lastName,
        firstName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.log(err);
  }
};
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    return err.code;
  }
};

const registerWithEmailAndPassword = async ({
  lastName,
  firstName,
  email,
  password,
}) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      lastName,
      firstName,
      authProvider: "local",
      email,
    });
  } catch (error) {
    return error.code;
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (err) {
    console.error(err);
  }
};

const useChangePassword = () => {
  const [updatePassword, updating, error] = useUpdatePassword(auth);

  return [updatePassword, updating];
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  useChangePassword,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};
