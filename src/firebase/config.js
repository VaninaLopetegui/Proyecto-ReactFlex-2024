import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDYQSHTZl0amQt8TejUy5IFOfSRDr_i1-U",
    authDomain: "proyectodreamtapestry.firebaseapp.com",
    projectId: "proyectodreamtapestry",
    storageBucket: "proyectodreamtapestry.firebasestorage.app",
    messagingSenderId: "988117203713",
    appId: "1:988117203713:web:f9382dd2857c3604dc7900"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);