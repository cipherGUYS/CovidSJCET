

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
import { getDatabase, ref, get, set, child, update, remove } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-database.js";
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
var cscard = document.getElementById("cs-card");
var adcard = document.getElementById("ad-card");
var selector = document.getElementById("selector")
var year2 = document.getElementById("year-2");
function main() {
  get(child(ref(db), "/")).then((data) => {
    if (data.exists()) {
      function getter2() {
        selector.innerText="Second Year ";
        var cs = document.getElementById("cs-count");
        cs.innerHTML = data.child("Second/cs").val().count;
        var ad = document.getElementById("ad-count");
        ad.innerHTML = data.child("Second/ad").val().count;

        function csname() {
          cscard.innerHTML =`<p> ${data.child("Second/cs").val().names} </p>`;
        }
        function adname(){
          adcard.innerHTML = data.child("Second/ad").val().names;
        }
        cscard.addEventListener("click", csname);
        adcard.addEventListener("click", adname);
      }
      year2.addEventListener("click",getter2);
    }
  })
}

main();
