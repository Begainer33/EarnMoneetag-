const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

let coins =
parseInt(
localStorage.getItem("coins")
) || 0;

let spins =
parseInt(
localStorage.getItem("spins")
) || 30;

let spinCount =
parseInt(
localStorage.getItem("spinCount")
) || 0;

const rewards=[
5,
10,
20,
50,
];

const spinBtn=
document.getElementById(
"spinBtn"
);

const redeemBtn=
document.getElementById(
"redeemBtn"
);

const inviteBtn=
document.getElementById(
"inviteBtn"
);

const profileBtn=
document.getElementById(
"profileBtn"
);

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

coinsEl.innerText=coins;
spinsEl.innerText=spins;

}

updateUI();

const today =
new Date().toDateString();

const lastDate =
localStorage.getItem(
"lastDate"
);

if(lastDate!==today){

spins=30;

localStorage.setItem(
"spins",
30
);

localStorage.setItem(
"lastDate",
today
);

updateUI();

}

spinBtn.addEventListener(
"click",
()=>{

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

localStorage.setItem(
"coins",
coins
);

localStorage.setItem(
"spins",
spins
);

spinCount++;

localStorage.setItem(
"spinCount",
spinCount
);

updateUI();

resultEl.innerText=
`🎉 You won ${reward} coins`;

if(
spinCount % 2 === 0
){

showMonetagAd();

}

}
);

redeemBtn.addEventListener(
"click",
()=>{

if(coins<50000){

document.getElementById(
"redeemResult"
).innerText=
"❌ Need minimum 50000 coins";

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

document.getElementById(
"redeemResult"
).innerText=
"✅ Redeem request submitted";

}
);

inviteBtn.addEventListener(
"click",
()=>{

tg.openTelegramLink(
"https://t.me/EarnMoneetag_bot"
);

}
);

profileBtn.addEventListener(
"click",
()=>{

const user=
tg.initDataUnsafe.user;

document.getElementById(
"profileData"
).innerText=
`
ID: ${user.id}
Name: ${user.first_name}
Username: @${user.username || "none"}
Coins: ${coins}
`;

}
);

function showMonetagAd(){

try{

show_11108341('pop')
.then(()=>{

console.log(
"Ad closed"
);

})
.catch(()=>{

console.log(
"No ad available"
);

});

}catch(err){

console.log(
"Ad error"
);

}

}
