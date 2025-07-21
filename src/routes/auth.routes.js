//Capa de rutas de autenticación
import { Router } from "express";
import authController from '../controllers/auth.controller.js'

const router = Router();

//POST -> Para login de usuario
router.post('/login', authController.login);

export default router