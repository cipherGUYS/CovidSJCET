

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
const yr = {
    "year-1": "First",
    "year-2": "Second",
    "year-3": "Third",
    "year-4": "Fourth"
};
const brn_id = {
    "cs-card": "cs",
    "ad-card": "ad",
    "ce-card": "ce",
    "ee-card": "ee",
    "ei-card": "ei",
    "me-card": "me",
    "ec-card": "ec"
}
const branches = ['cs', 'ad', 'ce', 'ee', 'ei', 'me', 'ec'];

//initializing card elements
var cscard = document.getElementById("cs-card");
var adcard = document.getElementById("ad-card");
var cecard = document.getElementById("ce-card");
var eecard = document.getElementById("ee-card");
var eicard = document.getElementById("ei-card");
var mecard = document.getElementById("me-card");
var eccard = document.getElementById("ec-card");

//initializing counters

var prCount = document.getElementById("pr-count");
var poCount = document.getElementById("po-count");
var syCount = document.getElementById("sy-count");
var quCount = document.getElementById("qu-count");

var dropDown = document.getElementById("selector")
var year1 = document.getElementById("year-1");
var year2 = document.getElementById("year-2");
var year3 = document.getElementById("year-3");
var year4 = document.getElementById("year-4");
function main() {
    get(child(ref(db), "/")).then((data) => {
        if (data.exists()) {
            branches.forEach(branch => {
                document.getElementById(`${branch}-count`).innerHTML = data.child(`Total/${branch}`).val().count;
            });

            function counter(){
                var po = 0;
                var pr = 0;
                var sy = 0;
                var qu = 0;
                branches.forEach(branch => {
                    po = po + parseInt(data.child(`Total/${branch}`).val().count);
                });
                pr = Math.ceil( po*0.5*3 + po);
                sy = Math.ceil(pr*0.25 + 3);
                qu = po+pr;
                poCount.setAttribute("data-purecounter-end",po);
                prCount.setAttribute("data-purecounter-end",pr);
                syCount.setAttribute("data-purecounter-end",sy);
                quCount.setAttribute("data-purecounter-end",qu);
            }

            counter();

            function getter(y) {

                console.log(y.id + " y.id");
                var year = yr[y.id];
                dropDown.innerText = `${year} Year`;

                branches.forEach(branch => {
                    document.getElementById(`${branch}-count`).classList.add("text-center");
                    document.getElementById(`${branch}-count`).innerHTML = data.child(`${year}/${branch}`).val().count;
                });

                function namePrint(t) {
                    var i = 0;
                    var br = brn_id[t.id];
                    var s = new String();
                    data.child(`${year}/${br}`).val().names.forEach(element => {
                        i++;
                        s = s.concat(`${i}.${element}<br>`);
                    });
                    document.getElementById(`${br}-count`).classList.remove("text-center")
                    document.getElementById(`${br}-count`).innerHTML = `<p>${s}</p>`;
                }

                //adding functions for cards
                cscard.addEventListener("click", () => { namePrint(cscard); });
                adcard.addEventListener("click", () => { namePrint(adcard); });
                cecard.addEventListener("click", () => { namePrint(cecard); });
                eecard.addEventListener("click", () => { namePrint(eecard); });
                eicard.addEventListener("click", () => { namePrint(eicard); });
                mecard.addEventListener("click", () => { namePrint(mecard); });
                eccard.addEventListener("click", () => { namePrint(eccard); });

            }
            //adding funtions to dropdown
            year1.addEventListener("click", () => { getter(year1); });
            year2.addEventListener("click", () => { getter(year2); });
            year3.addEventListener("click", () => { getter(year3); });
            year4.addEventListener("click", () => { getter(year4); });
        }
    })
}

main();
