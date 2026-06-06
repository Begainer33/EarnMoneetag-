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

    // update UI
    coinsEl.innerText = coins;
    spinsEl.innerText = spins;

    resultEl.innerText =
    `🎉 You won ${reward} coins`;

});
