import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA9Pl6QvFuYZQCuAEeuZdt3GqBmjuXye9Q",
    authDomain: "jam-chat-4691e.firebaseapp.com",
    projectId: "jam-chat-4691e",
    storageBucket: "jam-chat-4691e.appspot.com",
    messagingSenderId: "212084996057",
    appId: "1:212084996057:web:7dc6b884eb88b440d3cbc8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;


