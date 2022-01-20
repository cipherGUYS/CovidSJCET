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

const yr = {
    "year-1": "First",
    "year-2": "Second",
    "year-3": "Third",
    "year-4": "Fourth"
};
const brn_id = {
    "branch-cs": "cs",
    "branch-ad": "ad",
    "branch-ce": "ce",
    "branch-ee": "ee",
    "branch-ei": "ei",
    "branch-me": "me",
    "branch-ec": "ec"
}

var year1 = document.getElementById("year-1");
var year2 = document.getElementById("year-2");
var year3 = document.getElementById("year-3");
var year4 = document.getElementById("year-4");

var cscard = document.getElementById("branch-cs");
var adcard = document.getElementById("branch-ad");
var cecard = document.getElementById("branch-ce");
var eecard = document.getElementById("branch-ee");
var eicard = document.getElementById("branch-ei");
var mecard = document.getElementById("branch-me");
var eccard = document.getElementById("branch-ec");

var sub = document.getElementById("submit");

var year ="";
var branch="";
function yearGet(t){
    year = yr[t.id];
    document.getElementById("year-selector").innerText = `${year} Year `;
    
}
function branchGet(t){
    branch = brn_id[t.id];
    document.getElementById("branch-selector").innerText = `${branch} `;
   
}

function change(){
    if( (year != "") && (branch != "") ){
        var val = document.forms["Data"]["Count"].value;
        update(ref(db,`${year}/${branch}`), {
            count: val,
        });
        document.getElementById("form").reset();
        setTimeout(()=>{
            location.replace("../index.html");
        }, 3000);

    }
}
//adding funtions to dropdown
year1.addEventListener("click", () => { yearGet(year1); });
year2.addEventListener("click", () => { yearGet(year2); });
year3.addEventListener("click", () => { yearGet(year3); });
year4.addEventListener("click", () => { yearGet(year4); });

cscard.addEventListener("click", () => { branchGet(cscard); });
adcard.addEventListener("click", () => { branchGet(adcard); });
cecard.addEventListener("click", () => { branchGet(cecard); });
eecard.addEventListener("click", () => { branchGet(eecard); });
eicard.addEventListener("click", () => { branchGet(eicard); });
mecard.addEventListener("click", () => { branchGet(mecard); });
eccard.addEventListener("click", () => { branchGet(eccard); });

sub.addEventListener("click",change);