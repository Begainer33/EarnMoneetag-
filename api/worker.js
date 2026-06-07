export default async function handler(req, res){

const DB_URL=process.env.FIREBASE_DB_URL;
const DB_SECRET=process.env.FIREBASE_DB_SECRET;

async function dbFetch(path,method="GET",body=null){

 const url=`${DB_URL}/${path}.json?auth=${DB_SECRET}`;

 const options={
   method,
   headers:{
      "Content-Type":"application/json"
   }
 };

 if(body){
   options.body=JSON.stringify(body);
 }

 const response=await fetch(url,options);

 return await response.json();
}

const action=req.query.action;

try{

let result={};

if(action==="getConfig"){
 result=await dbFetch("config");
}

else if(action==="login"){

const data=req.body;
const uid=data.id;

let user=await dbFetch(`users/${uid}`);

if(!user){

user={
 id:uid,
 firstName:data.firstName,
 photoUrl:data.photoUrl || "",
 referrals:0,
 balance:0,
 totalEarned:0
};

await dbFetch(
`users/${uid}`,
"PUT",
user
);

}

result=user;
}

else if(action==="updateBalance"){

const data=req.body;

const user=await dbFetch(
`users/${data.id}`
);

const newBalance=
(user.balance||0)
+
Number(data.amount);

await dbFetch(
`users/${data.id}`,
"PATCH",
{
balance:newBalance,
totalEarned:
(user.totalEarned||0)
+
Number(data.amount)
}
);

result={
success:true,
newBalance:newBalance
};

}

res.status(200).json(result);

}catch(e){

res.status(500).json({
error:e.message
});

}
}
