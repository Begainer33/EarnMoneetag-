const tg=window.Telegram.WebApp;

tg.ready();

tg.expand();

let coins=
parseInt(
localStorage.getItem("coins")
)||0;

let spins=
parseInt(
localStorage.getItem("spins")
)||30;

let spinCount=
parseInt(
localStorage.getItem("spinCount")
)||0;

const rewards=[
5,10,20,50,100,250,500,1000
];

const coinsEl=
document.getElementById(
"coins"
);

const spinsEl=
document.getElementById(
"spins"
);

const resultEl=
document.getElementById(
"result"
);

function updateUI(){

coinsEl.innerText=
coins;

spinsEl.innerText=
spins;

}

const today=
new Date()
.toDateString();

const savedDate=
localStorage.getItem(
"lastDate"
);

if(savedDate!==today){

spins=30;

localStorage.setItem(
"spins",
30
);

localStorage.setItem(
"lastDate",
today
);

}

updateUI();

document
.getElementById(
"spinBtn"
)
.onclick=()=>{

if(spins<=0){

alert(
"No spins left"
);

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

spinCount++;

localStorage.setItem(
"coins",
coins
);

localStorage.setItem(
"spins",
spins
);

localStorage.setItem(
"spinCount",
spinCount
);

updateUI();

resultEl.innerText=
`🎉 Won ${reward} coins`;

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

document
.getElementById(
"inviteBtn"
)
.onclick=()=>{

tg.openTelegramLink(
"https://t.me/EarnMoneetag_bot"
);

};
