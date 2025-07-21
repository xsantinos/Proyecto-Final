
// Middleware de autenticación para proteger rutas mediante verificación de token JWT.
// No implementado

/*
import { verifyToken } from "../utils/token-generator.js";
export const authentication = (req, res, next) => {
    const token = req.headers["authorization"].split(" ")[1];
    if (!token){
        return res.status(401);
    }else{
        const verificationResult = verifyToken(token);
        if (!verificationResult.valid){
            return res.status(403);
        }else{
            req.user = verificationResult.decoded;
            next();
        }
    }
}
*/