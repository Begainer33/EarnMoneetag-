import { db } from "./firebase.js";

import {
collection,
getDocs,
doc,
updateDoc
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const container =
document.getElementById(
"redeems"
);

async function loadRequests(){

container.innerHTML="";

const snapshot =
await getDocs(
collection(db,"redeems")
);

snapshot.forEach((item)=>{

const data=item.data();

const div=
document.createElement("div");

div.className="card";

div.innerHTML=`

<p>UID: ${data.uid}</p>

<p>Coins: ${data.coins}</p>

<p>Status: ${data.status}</p>

<button onclick="approve('${item.id}')">
✅ Approve
</button>

<button onclick="reject('${item.id}')">
❌ Reject
</button>

`;

container.appendChild(div);

});

}

window.approve =
async(id)=>{

await updateDoc(
doc(db,"redeems",id),
{
status:"approved"
}
);

loadRequests();

};

window.reject =
async(id)=>{

await updateDoc(
doc(db,"redeems",id),
{
status:"rejected"
}
);

loadRequests();

};

loadRequests();
