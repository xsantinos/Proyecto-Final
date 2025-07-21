import { config } from "dotenv";
config();

//Genero el objeto envs, donde voy a tener todas las variables de entorno de
//mi proyecto. En este caso, de base de datos y de autenticación.
export const envs = {
    database: {
        apiKey: process.env.APIKEY,
        authDomain: process.env.AUTHDOMAIN,
        projectId: process.env.PROJECTID,
        storageBucket: process.env.STORAGEBUCKET,
        messagingSenderId: process.env.MESSAGINGSENDERID,
        appId: process.env.APPID
    },
    secrets: {
        jwt_secret: process.env.JWT_SECRET || "algun_secret_para_jwt",
        session: process.env.SESSION_KEY || "alguna_otra_session_key"
    }
}
