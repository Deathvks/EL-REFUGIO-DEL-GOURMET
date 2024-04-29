// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgM8AfGFtir5s9RGk6vQf5MgEVeIGLCk4",
  authDomain: "el-rincon-del-gourmet.firebaseapp.com",
  databaseURL: "https://el-rincon-del-gourmet-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "el-rincon-del-gourmet",
  storageBucket: "el-rincon-del-gourmet.appspot.com",
  messagingSenderId: "780507071249",
  appId: "1:780507071249:web:05bc9e59f01138685c02b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export default db;