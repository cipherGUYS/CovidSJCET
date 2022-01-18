

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
var yr = {
  "year-1":"First",
  "year-2":"Second",
  "year-3":"Third",
  "year-4":"Fourth"
};
var cscard = document.getElementById("cs-card");
var adcard = document.getElementById("ad-card");
var csCount = document.getElementById("cs-count");
var adCount = document.getElementById("ad-count");
var ceCount = document.getElementById("ce-count");
var eeCount = document.getElementById("ee-count");
var eiCount = document.getElementById("ei-count");
var meCount = document.getElementById("me-count");
var ecCount = document.getElementById("ec-count");

var dropDown = document.getElementById("selector")
var year1 = document.getElementById("year-1");
var year2 = document.getElementById("year-2");
var year3 = document.getElementById("year-3");
var year4 = document.getElementById("year-4");
function main() {
  get(child(ref(db), "/")).then((data) => {
    if (data.exists()) {

      csCount.innerHTML = data.child("Total/cs").val().count
      adCount.innerHTML = data.child("Total/ad").val().count
      ceCount.innerHTML = data.child("Total/ce").val().count
      ecCount.innerHTML = data.child("Total/ec").val().count
      eiCount.innerHTML = data.child("Total/ei").val().count
      eeCount.innerHTML = data.child("Total/ee").val().count
      meCount.innerHTML = data.child("Total/me").val().count
      function getter(y) {
        console.log(y.id + " y.id");
        var year = yr[y.id];
        dropDown.innerText=`${year} Year`;
        
        csCount.innerHTML = data.child(`${year}/cs`).val().count;
        
        adCount.innerHTML = data.child(`${year}/ad`).val().count;

        function csname() {
          csCount.innerHTML =`<p> ${data.child(`${year}/cs`).val().names} </p>`;
        }
        function adname(){
          adCount.innerHTML = data.child(`${year}/ad`).val().names;
        }
        cscard.addEventListener("click", csname);
        adcard.addEventListener("click", adname);
      }
      year1.addEventListener("click",()=>{getter(year1);});
      year2.addEventListener("click",()=>{getter(year2);});
      year3.addEventListener("click",()=>{getter(year3);});
      year4.addEventListener("click",()=>{getter(year4);});
    }
  })
}
function add(){
  update(ref(db,"Second/"),{
    cs: {
      count:"26",
      names:['allaney', 'hari', 'shalon', 'rahul', 'harikrishnan', 'aishu', 'ann Maria', 'amrutha', 'treesa', 'mubeena', 'manjusree', 'ryana', 'arun', 'george', 'pranav', 'Athul soman', 'akhil', 'Delna', 'Sree', '1. Sweety', 'Abhishek', 'Mathews', 'Nimitha', 'Naveen', 'Anandu', 'Kevin', 'Praise']
    },
    me: {
      count:"not received",
      names:["waiting..",]
    },
    ad: {
      count:"not received",
      names:["waiting..",]
    },
    ce: {
      count:"not received",
      names:["waiting..",]
    },
    ec: {
      count:"not received",
      names:["waiting..",]
    },
    ee: {
      count:"not received",
      names:["waiting..",]
    },
    ei: {
      count:"not received",
      names:["waiting..",]
    }
    
    /*update(ref(db,"Total/"),{
    cs: {
      count:"not received",
      names:["waiting..",]
    },
    me: {
      count:"not received",
      names:["waiting..",]
    },
    ad: {
      count:"not received",
      names:["waiting..",]
    },
    ce: {
      count:"not received",
      names:["waiting..",]
    },
    ec: {
      count:"not received",
      names:["waiting..",]
    },
    ee: {
      count:"not received",
      names:["waiting..",]
    },
    ei: {
      count:"not received",
      names:["waiting..",]
    }*/
  });
  
}

main();
