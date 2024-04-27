// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-mGL2z5Wjj9n2y1gUlXS5MUEUyjUHYZw",
  authDomain: "tonguefu-18c07.firebaseapp.com",
  projectId: "tonguefu-18c07",
  storageBucket: "tonguefu-18c07.appspot.com",
  messagingSenderId: "441777426341",
  appId: "1:441777426341:web:ea2a840fd0dc3678c7224c",
  measurementId: "G-M2E5D9CC9F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)