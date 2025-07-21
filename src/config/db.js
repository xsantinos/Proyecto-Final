import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { envs } from "./envs.js";

// Configuración con las variables de entorno de Firebase, definida en envs.js
const firebaseConfig = envs.database;

// Inicializo Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };