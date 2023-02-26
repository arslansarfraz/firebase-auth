import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCRA5WhrFGid20oESfyIOJDcHJQGfWELX8",
    authDomain: "social-react-4af52.firebaseapp.com",
    projectId: "social-react-4af52",
    storageBucket: "social-react-4af52.appspot.com",
    messagingSenderId: "435475575333",
    appId: "1:435475575333:web:f7495644ec858e5dce05cc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app)