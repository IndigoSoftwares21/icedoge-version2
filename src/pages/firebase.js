import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyA6D_K2-okqpB63lZ_LgF550iqqVaYOYgI",
    authDomain: "ice-doge-dev.firebaseapp.com",
    projectId: "ice-doge-dev",
    storageBucket: "ice-doge-dev.appspot.com",
    messagingSenderId: "283454996400",
    appId: "1:283454996400:web:158e47fc2ae3d8a1032075",
    measurementId: "G-ZGJYGRQY01"
};

const app = initializeApp(firebaseConfig);

export default app;

export const Auth = getAuth();

