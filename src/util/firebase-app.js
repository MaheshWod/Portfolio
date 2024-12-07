// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGY-ELAiaMuq1xl2C7Ku98otGKyK3dOQs",
  authDomain: "portfolio-a582a.firebaseapp.com",
  projectId: "portfolio-a582a",
  storageBucket: "portfolio-a582a.firebasestorage.app",
  messagingSenderId: "1022935498621",
  appId: "1:1022935498621:web:da3fd9a9185f7a2ed0d614",
  measurementId: "G-FT0BDRD7T1"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firebaseConfigApp = initializeApp(firebaseConfig);
export default firebaseConfigApp