import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
 apiKey:"AIzaSyCUxqiC0WkxDXsaVpcZOz0lUjx8zUjVjZA",
 authDomain:"earnmoneetag.firebaseapp.com",
 projectId:"earnmoneetag",
 storageBucket:"earnmoneetag.firebasestorage.app",
 messagingSenderId: "159809448156",
 appId:"1:159809448156:web:235d2b43020c14cc42ac19",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
