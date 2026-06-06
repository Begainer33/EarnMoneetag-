const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

let coins = parseInt(localStorage.getItem("coins")) || 0;
let spins = parseInt(localStorage.getItem("spins")) || 30;

const rewards = [5,10,20,50,100,250,500,1000];

const coinsEl = document.getElementById("coins");
const spinsEl = document.getElementById("spins");
const resultEl = document.getElementById("result");

const spinBtn = document.getElementById("spinBtn");
const redeemBtn = document.getElementById("redeemBtn");
const inviteBtn = document.getElementById("inviteBtn");

// UI update
function updateUI(){
    coinsEl.innerText = coins;
    spinsEl.innerText = spins;
}

updateUI();

// Daily reset
const today = new Date().toDateString();
const lastDate = localStorage.getItem("lastDate");

if(lastDate !== today){
    spins = 30;

    localStorage.setItem("spins", spins);
    localStorage.setItem("lastDate", today);

    updateUI();
}

// Spin
spinBtn.addEventListener("click",()=>{

    if(spins<=0){
        alert("No spins left");
        return;
    }

    spins--;

    const reward =
    rewards[Math.floor(Math.random()*rewards.length)];

    coins += reward;

    localStorage.setItem("coins", coins);
    localStorage.setItem("spins", spins);

    updateUI();

    resultEl.innerText =
    `🎉 You won ${reward} coins`;
});

// Redeem
redeemBtn.addEventListener("click",()=>{

if(coins<50000){

document.getElementById(
"redeemResult"
).innerText=
"❌ Need minimum 50000 coins";

return;
}

const uid=prompt(
"Enter Binance UID"
);

if(!uid) return;

coins -= 50000;

localStorage.setItem(
"coins",
coins
);

updateUI();

document.getElementById(
"redeemResult"
).innerText=
"✅ Redeem request submitted";

});

// Invite
inviteBtn.addEventListener("click",()=>{

tg.openTelegramLink(
"https://t.me/EarnMoneetagBot"
);

});
