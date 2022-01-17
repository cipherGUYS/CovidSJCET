
  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
  import { getDatabase, ref, set, child, update, remove } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-database.js";
  const firebaseConfig = {
    apiKey: "AIzaSyC2Ug5sTQ-Unbj0DgtBe-4H47tAWgA117Y",
    authDomain: "cipherguys-a099e.firebaseapp.com",
    projectId: "cipherguys-a099e",
    storageBucket: "cipherguys-a099e.appspot.com",
    messagingSenderId: "104737170516",
    appId: "1:104737170516:web:acdcf71343caf934f6b9c1"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase();
