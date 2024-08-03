 


// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB8zFQ11X8pFzMgfZHih74-sZKVKfj8MMA",
//   authDomain: "pantry-tracker-422b9.firebaseapp.com",
//   databaseURL: "https://pantry-tracker-422b9-default-rtdb.firebaseio.com",
//   projectId: "pantry-tracker-422b9",
//   storageBucket: "pantry-tracker-422b9.appspot.com",
//   messagingSenderId: "255378388214",
//   appId: "1:255378388214:web:aa3be6a2c51b7a5345a8d7"
// };

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { app, auth, database };

