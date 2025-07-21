// Controlador para las rutas de autenticación y login de usuarios
//import authService from '../services/auth.service.js'
import { generateToken } from '../utils/token-generator.js';

//Usuario de ejemplo para pruebas
const default_user = {
    id: 1,
    email: "mailde1@mail.com",
    password: "1234"
}

//Función login para verificación de credenciales de usuario
const login = async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    if (email == default_user.email && password == default_user.password){
        const user = { email, password};
        const token = generateToken(user);
        res.json({ token });
    } else {
        return res.status(401).send("Usuario no válido");
    }
}


export default { login };