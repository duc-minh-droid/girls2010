import { initializeApp } from "firebase/app";
import { getStorage} from 'firebase/storage'
import { getAuth } from "firebase/auth";
import {getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBRf7OyvMqzCMZGR1tW8VPBkBE3J31svA8",
  authDomain: "girls2010.firebaseapp.com",
  projectId: "girls2010",
  storageBucket: "girls2010.appspot.com",
  messagingSenderId: "724123147066",
  appId: "1:724123147066:web:cb7b40fb64df8504c5ce03"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const auth = getAuth(app);
const db = getFirestore(app)
export const lettersDB = collection(db, 'letters')
export const usersDB = collection(db, 'users')