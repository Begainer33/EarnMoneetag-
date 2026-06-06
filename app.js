const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

let coins = 0;
let spins = 30;

const rewards = [5,10,20,50,100,250,500,1000];

const spinBtn = document.getElementById("spinBtn");
const coinsEl = document.getElementById("coins");
const spinsEl = document.getElementById("spins");
const resultEl = document.getElementById("result");

// আগের saved data load
coins = parseInt(localStorage.getItem("coins")) || 0;
spins = parseInt(localStorage.getItem("spins")) || 30;

coinsEl.innerText = coins;
spinsEl.innerText = spins;

spinBtn.addEventListener("click", () => {

    if(spins <= 0){
        alert("No spins left");
        return;
    }

    spins--;

    const reward =
    rewards[Math.floor(Math.random()*rewards.length)];

    coins += reward;

    // save
    localStorage.setItem("coins", coins);
    localStorage.setItem("spins", spins);


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

    // update UI
    coinsEl.innerText = coins;
    spinsEl.innerText = spins;

    resultEl.innerText =
    `🎉 You won ${reward} coins`;

});


const redeemBtn =
document.getElementById("redeemBtn");

redeemBtn.addEventListener("click",()=>{

if(coins<50000){

document.getElementById(
"redeemResult"
).innerText=
"❌ Need 50000 coins minimum";

return;

}

const uid=
prompt("Enter Binance UID");

if(!uid)return;

document.getElementById(
"redeemResult"
).innerText=
"✅ Redeem request submitted";

coins-=50000;

localStorage.setItem(
"coins",
coins
);

coinsEl.innerText=coins;

});
const inviteBtn=
document.getElementById(
"inviteBtn"
);

inviteBtn.onclick=()=>{

const link=
"https://t.me/EarnMoneetagBot";

tg.openTelegramLink(link);

}
