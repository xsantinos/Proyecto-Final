//Importo los módulos de express para crear mi servidor y de cors, para habilitar
//las solicitudes que provengan de otro servidor.
import express from "express";
import cors from "cors";

// Importo funciones dirname y join desde path y fileURLToPath desde url 
// para luego poder trabajar con "__dirname" como ruta completa del directorio
// donde está ubicado este archivo => Esto es, a src.
import { dirname, join } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = join(dirname(__filename));

import productRoutes from "./routes/product.routes.js";
import authRoutes from "./routes/auth.routes.js";

//settings - Creación del servidor web con express y configuración de puerto.
const app = express();
app.set("PORT", 3000);

//CORS - Permitimos las solicitudes de origen cruzado en nuestro servidor, 
//para las consultas que desee realizar la empresa
app.use(cors());

// middlewares
app.use(express.json()); // Equivalente a body-parser, para manejo de body .json
app.use(express.static(join(__dirname, "public"))); //Para servir archivos estáticos desde una carpeta "public"
app.use(express.urlencoded({ extended: true }));

//Rutas, tanto de products como de auth
app.use("/api/products", productRoutes);
app.use("/auth", authRoutes);


// Middleware para manejo de errores 404 y listener
app.use((req, res) => {
  res.status(404).send('Error 404 - Recurso no encontrado o ruta inválida');
});
app.listen(app.get("PORT"), () => {
  console.log(`Servidor escuchando en http://localhost:${app.get("PORT")}`);
});
