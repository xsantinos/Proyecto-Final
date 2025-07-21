
import jwt from "jsonwebtoken";
import { envs } from "../config/envs.js";

//Genero acá la clave porque la necesitaré tanto en la generación
//como en la verificación del token.
const {jwt_secret} = envs.secrets;

// Generar un token
export const generateToken = (userData) => {
    const user = { id: userData.id, email: userData.email };
    const expiration = { expiresIn: '1d' };
    return jwt.sign(user, jwt_secret, expiration);
};

// Verificar un token
export const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, jwt_secret);
        return {valid:true, decoded};
    } catch (error) {
        return {valid:false, message: error.message}; // o lanzá el error, según el manejo que prefieras
    }
};