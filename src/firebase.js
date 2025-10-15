import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBqCgo1g3RcZ7I9K-MVA828WnzR6NqT_yM",
    authDomain: "market-minii.firebaseapp.com",
    projectId: "market-minii",
    storageBucket: "market-minii.firebasestorage.app",
    messagingSenderId: "27625940623",
    appId: "1:27625940623:web:310a5a78412888eb8f72fa"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


