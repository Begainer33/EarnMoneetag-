import { db } from "./firebase.js";
import { ref, set, push } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const tg = window.Telegram.WebApp;
tg.expand();

const user = tg.initDataUnsafe?.user;

if(user){
  document.getElementById("username").textContent =
    `${user.first_name} (${user.id})`;

  const refLink =
    `https://t.me/YOUR_BOT_USERNAME/app?startapp=${user.id}`;

  document.getElementById("refLink").value = refLink;

  set(ref(db, "users/" + user.id), {
    id: user.id,
    name: user.first_name
  });
}

window.copyRef = () => {
  navigator.clipboard.writeText(
    document.getElementById("refLink").value
  );
};

window.submitWithdraw = () => {
  if(!user) return;

  const binance = document.getElementById("binance").value;

  push(ref(db, "withdraws"), {
    userId: user.id,
    binance,
    status: "pending",
    createdAt: Date.now()
  });

  alert("Withdraw request submitted");
};
