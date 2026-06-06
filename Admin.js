const container =
document.getElementById(
"redeems"
);

function loadRequests(){

container.innerHTML="";

for(let key in localStorage){

if(key.startsWith("redeem_")){

const data=
JSON.parse(
localStorage.getItem(key)
);

const div=
document.createElement(
"div"
);

div.className="card";

div.innerHTML=`

<p>UID: ${data.uid}</p>

<p>Coins: ${data.coins}</p>

<p>Status: ${data.status}</p>

<button onclick="approve('${key}')">
✅ Approve
</button>

<button onclick="reject('${key}')">
❌ Reject
</button>

`;

container.appendChild(div);

}

}

}

function approve(key){

const data=
JSON.parse(
localStorage.getItem(key)
);

data.status=
"approved";

localStorage.setItem(
key,
JSON.stringify(data)
);

loadRequests();

}

function reject(key){

const data=
JSON.parse(
localStorage.getItem(key)
);

data.status=
"rejected";

localStorage.setItem(
key,
JSON.stringify(data)
);

loadRequests();

}

loadRequests();
