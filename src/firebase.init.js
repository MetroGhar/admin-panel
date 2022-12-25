// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuIYJiQ0l20t_SW0RHnF8PcS4d19NMU0M",
  authDomain: "builder-381f1.firebaseapp.com",
  projectId: "builder-381f1",
  storageBucket: "builder-381f1.appspot.com",
  messagingSenderId: "944505865336",
  appId: "1:944505865336:web:e12d88fc0603940cb7598d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
