import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9u8_wdr1v1MT_lEI7SsHrkUQg2NLsjAc",
  authDomain: "greentex-f8095.firebaseapp.com",
  projectId: "greentex-f8095",
  storageBucket: "greentex-f8095.firebasestorage.app",
  messagingSenderId: "582104727416",
  appId: "1:582104727416:web:9d46fa50184b670818528d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
