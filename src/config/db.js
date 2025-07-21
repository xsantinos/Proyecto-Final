import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { envs } from "./envs.js";

// Configuración definida en envs.js
const firebaseConfig = envs.database;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };