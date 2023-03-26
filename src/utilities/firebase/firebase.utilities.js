// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAztnLJP6kmOJP1IXex8rVk1UTWznT7fDY",
  authDomain: "spiceit-ad536.firebaseapp.com",
  projectId: "spiceit-ad536",
  storageBucket: "spiceit-ad536.appspot.com",
  messagingSenderId: "249968288802",
  appId: "1:249968288802:web:355952d21819f8157f167b",
  measurementId: "G-1Q1MJ4JL7M",
};

const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const db = getFirestore();

export const createUser = async (userAuth) => {
  const userReff = doc(db, "users", userAuth.uid);
  const userSnapShot = await getDoc(userReff);

  if(!userSnapShot.exists()){
    const {displayName,email} = userAuth;
    const createdAt = new Date();

  try {

    await setDoc(userReff,{
      email,
      displayName,
      createdAt,
    })
    
  } catch (error) {
    console.log("ops there was an error",error);
  }
  }
};
export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, googleProvider);
};
