import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDbKuNw5ms486TBHq6Eg7G-pKAmjBlSRbk",
    authDomain: "creatulanding-meolans.firebaseapp.com",
    projectId: "creatulanding-meolans",
    storageBucket: "creatulanding-meolans.firebasestorage.app",
    messagingSenderId: "334416891327",
    appId: "1:334416891327:web:ffe371a8e1ceee0398a50a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);