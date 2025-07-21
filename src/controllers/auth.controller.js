// Controlador para las rutas de autenticación y login de usuarios
//import authService from '../services/auth.service.js'
import { generateToken } from '../utils/token-generator.js';

//Usuario de ejemplo para pruebas contra el que compara lo que se 
//envíe por la solicitud POST para login de usuario.
const default_user = {
    id: 1,
    email: "mailde1@mail.com",
    password: "1234"
}

//Función login para verificación de credenciales de usuario.
//Si falta email o password devuelve error 400. Si el usuario 
//coincide con default_user, genera el token JWT.
const login = async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    if (!email || !password) {
        return res.status(400).json({ message: "Faltan datos para login" });
    }
    if (email == default_user.email && password == default_user.password){
        const user = { email, password};
        const token = generateToken(user);
        res.status(200).json({ token });
    } else {
        return res.status(401).json({ message: "Usuario no válido" });
    }
}


export default { login };