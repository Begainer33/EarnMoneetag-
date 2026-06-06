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

let coins = 0;
let spins = 30;

const rewards = [5,10,20,50,100,250,500,1000];

const spinBtn = document.getElementById("spinBtn");
const coinsEl = document.getElementById("coins");
const spinsEl = document.getElementById("spins");
const resultEl = document.getElementById("result");

async function loadUser(){

const userRef = doc(db,"users",userId);

const userSnap = await getDoc(userRef);

if(!userSnap.exists()){

await setDoc(userRef,{
coins:0,
spinsLeft:30,
username:user.username || "",
firstName:user.first_name || ""
});

coins=0;
spins=30;

}else{

const data=userSnap.data();

coins=data.coins;
spins=data.spinsLeft;

}

coinsEl.innerText=coins;
spinsEl.innerText=spins;

}

spinBtn.addEventListener("click",async()=>{

if(spins<=0){

alert("No spins left");

return;

}

spins--;

const reward=
rewards[Math.floor(Math.random()*rewards.length)];

coins+=reward;

await updateDoc(
doc(db,"users",userId),
{
coins:coins,
spinsLeft:spins
}
);

coinsEl.innerText=coins;
spinsEl.innerText=spins;

resultEl.innerText=
`🎉 You won ${reward} coins`;

});

loadUser();
