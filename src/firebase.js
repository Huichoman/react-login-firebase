// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import { getFirestore, collection, addDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqJuiN3V7LPtHwlOT9PkFXZGXHbRuH1GY",
  authDomain: "empleio.firebaseapp.com",
  projectId: "empleio",
  storageBucket: "empleio.appspot.com",
  messagingSenderId: "527221768516",
  appId: "1:527221768516:web:ada4901abc8ba17d0a1711",
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

const db = getFirestore(app);
// const dbRef = collection(db, "users");

export const createUser = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInUser = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const googleSignin = async () => {
  return signInWithPopup(auth, provider);
};

export const addUserInDb = async (uid, email) => {
  return addDoc(collection(db, "users"), { id: uid, email: email });
};
