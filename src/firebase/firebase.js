// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getDatabase, ref, set, update, remove, onValue } from "firebase/database";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB8zFQ11X8pFzMgfZHih74-sZKVKfj8MMA",
//   authDomain: "pantry-tracker-422b9.firebaseapp.com",
//   projectId: "pantry-tracker-422b9",
//   storageBucket: "pantry-tracker-422b9.appspot.com",
//   messagingSenderId: "255378388214",
//   appId: "1:255378388214:web:aa3be6a2c51b7a5345a8d7"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firebase services
// const auth = getAuth(app);
// const database = getDatabase(app);

// export { app, auth, database, ref, set, update, remove, onValue };


// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8zFQ11X8pFzMgfZHih74-sZKVKfj8MMA",
  authDomain: "pantry-tracker-422b9.firebaseapp.com",
  projectId: "pantry-tracker-422b9",
  storageBucket: "pantry-tracker-422b9.appspot.com",
  messagingSenderId: "255378388214",
  appId: "1:255378388214:web:aa3be6a2c51b7a5345a8d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { app, auth, database };

