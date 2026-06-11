import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "earnmoneetag.firebaseapp.com",
  projectId: "earnmoneetag",
  storageBucket: "earnmoneetag.firebasestorage.app",
  messagingSenderId: "159809448156",
  appId: "1:159809448156:web:235d2b43020c14cc42ac19",
  databaseURL: "https://earnmoneetag-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
