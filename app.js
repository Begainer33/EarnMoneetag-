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

// Count spins
spinCount++;

localStorage.setItem(
"spinCount",
spinCount
);

// Every 2 spins try to show ad
if(spinCount % 2 === 0){

try{

// Replace this function with your Monetag ad trigger
showMonetagAd();

}catch(e){

console.log(
"Ad not available"
);

}

}

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

const profileBtn =
document.getElementById("profileBtn");

const profileData =
document.getElementById("profileData");

profileBtn.addEventListener("click",()=>{

const user =
tg.initDataUnsafe.user;

profileData.innerText=
`
ID: ${user.id}
Name: ${user.first_name}
Username: @${user.username || "none"}
Coins: ${coins}
`;
// In-App Interstitial

show_11108341({
  type: 'inApp',
  inAppSettings: {
    frequency: 2,
    capping: 0.1,
    interval: 30,
    timeout: 5,
    everyPage: false
  }
})

/*
This value is decoded as follows:
- show automatically 2 ads
  within 0.1 hours (6 minutes)
  with a 30-second interval between them
  and a 5-second delay before the first one is shown.
  The last digit, 0, means that the session will be saved when you navigate between pages.
  If you set the last digit as 1, then at any transition between pages,
  the session will be reset, and the ads will start again.
*/


// Rewarded Popup

show_11108341('pop').then(() => {
    // user watch ad till the end or close it in interstitial format
    // your code to reward user for rewarded format
}).catch(e => {
    // user get error during playing ad
    // do nothing or whatever you want
})
    
});







