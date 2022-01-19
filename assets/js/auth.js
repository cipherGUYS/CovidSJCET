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

const app = initializeApp(firebaseConfig);
const db = getDatabase();

var userName = document.forms["CovidSignUpForm"]["Name"].value;
var passWord = document.forms["CovidSignUpForm"]["Password"].value;
var submit = document.getElementById("submit");



function auth() {
    var userName = document.forms["CovidSignUpForm"]["Name"].value;
    var passWord = document.forms["CovidSignUpForm"]["Password"].value;
    get(child(ref(db), "auth/")).then((data) => {

        if ((userName == data.val().userName) && (passWord == data.val().Password)) {
            location.replace("../admin.html");

        }
        else {
            document.getElementById("error").innerHTML = "Username and Password doesn't mathch";
        }
    });
}
submit.addEventListener("click", auth);
