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

}

updateUI();

document
.getElementById("spinBtn")
.onclick=()=>{

if(spins<=0){

alert("No spins left");
return;

}

const randomDeg=
3600+
Math.floor(Math.random()*360);

wheel.style.transform=
`rotate(${randomDeg}deg)`;

setTimeout(()=>{

spins--;

const reward=
rewards[
Math.floor(
Math.random()*
rewards.length
)
];

coins+=reward;

localStorage.setItem(
"coins",
coins
);

localStorage.setItem(
"spins",
spins
);

updateUI();

resultEl.innerText=
`🎉 Won ${reward} coins`;

},2000);

};

document
.getElementById(
"watchBonusBtn"
)
.onclick=()=>{

coins +=100;

localStorage.setItem(
"coins",
coins
);

updateUI();

alert(
"+100 bonus coins"
);

};

document
.getElementById(
"profileBtn"
)
.onclick=()=>{

const user=
tg.initDataUnsafe.user;

document
.getElementById(
"profileData"
)
.innerText=

`👤 ${user.first_name}
ID:${user.id}
Coins:${coins}`;

};

document
.getElementById(
"redeemBtn"
)
.onclick=()=>{

if(coins<50000){

alert(
"Need 50000 coins"
);

return;

}

const uid=
prompt(
"Enter Binance UID"
);

if(!uid)return;

coins-=50000;

localStorage.setItem(
"coins",
coins
);

updateUI();

alert(
"Redeem submitted"
);

};
