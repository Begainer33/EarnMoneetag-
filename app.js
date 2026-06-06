const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

let coins=0;
let spins=30;

const rewards=[
5,
10,
20,
50,
100,
250,
500,
1000
];

document
.getElementById("spinBtn")
.onclick=function(){

if(spins<=0){

alert("No spins left");

return;

}

spins--;

const reward=
rewards[
Math.floor(
Math.random()*
rewards.length
)
];

coins+=reward;

document.getElementById("coins").innerText=coins;

document
.getElementById("spins")
innerText=spins;

document
.getElementById("result")
innerText=
"You won "+reward+" coins";

}
