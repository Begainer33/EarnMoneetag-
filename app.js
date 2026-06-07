const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

let coins =
parseInt(localStorage.getItem("coins")) || 0;

let spins =
parseInt(localStorage.getItem("spins")) || 30;

const rewards=[
5,10,20,50,100,250,500,1000
];

const wheel =
document.getElementById("wheel");

const coinsEl =
document.getElementById("coins");

const spinsEl =
document.getElementById("spins");

const resultEl =
document.getElementById("result");

function updateUI(){

coinsEl.innerText=coins;
spinsEl.innerText=spins;

const levelBox=
document.getElementById(
"levelBox"
);

if(coins>=100000){

levelBox.innerText=
"👑 Legend";

}
else if(coins>=50000){

levelBox.innerText=
"💎 Diamond";

}
else if(coins>=10000){

levelBox.innerText=
"🔥 Pro";

}
else{

levelBox.innerText=
"⭐ Beginner";

}

}
