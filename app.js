import { db } from "./firebase.js";

import {
doc,
getDoc,
setDoc,
updateDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

const user = tg.initDataUnsafe.user;

const userId = String(user.id);

const rewards=[5,10,20,50,100,250,500,1000];

async function loadUser(){

const ref=doc(db,"users",userId);

const snap=await getDoc(ref);

if(!snap.exists()){

await setDoc(ref,{
coins:0,
spinsLeft:30,
username:user.username || "",
firstName:user.first_name || ""
});

document.getElementById("coins").innerText=0;
document.getElement
