# 🛠️ Proyecto Final Node.js - Talento Tech  
**Desarrollado por Santiago Borghi**

Este proyecto es una API desarrollada como proyecto final del curso Backend NodeJS del programa **Talento Tech**.
Su propósito es gestionar un catálogo de productos, con operaciones CRUD básicas (salvo Update) y autenticación de usuarios mediante **JWT**.

---

## Características principales

- API REST con arquitectura en capas: **routes -> controllers -> services -> model**.
- Con bloques try-catch de validación.
- Con manejo de estados (200, 400, 404, 500)
- Autenticación de usuarios vía JSON Web Tokens.
- Base de datos **Firebase Firestore**.
- Modularidad: Aparte de la división de responsabilidades en capas, existen dos "líneas de trabajo" por así decir, una 
  de usuarios/login y otra de productos (auth y product).
- Colección de solicitudes con documentación propia, realizada en Postman (se incluye el link al final de este archivo).
- Ingresando npm start por consola, ejecuta "node index.js". Ingresando npm test, ejecuta "nodemon index.js" para pruebas más fácil.
- Para el funcionamiento adecuado del proyecto se han instalado las siguientes dependencias:
    body-parser -> ^2.2.0
    cors -> ^2.8.5
    dotenv -> ^17.2.0
    express -> ^5.1.0
    firebase -> ^12.0.0
    jsonwebtoken -> ^9.0.2
    nodemon -> ^3.1.10

---

## 📁 Estructura del Proyecto

PROYECTO FINAL (carpeta raiz)
node_modules
src/
├── config/                 # Configuración de Firebase y variables de entorno
│   ├── db.js
│   └── envs.js
│
├── controllers/           # Controladores para manejar la lógica de rutas
│   ├── auth.controller.js
│   └── product.controller.js
│
├── middlewares/           # Sólo middleware de autenticación.
│   └── auth.middleware.js
│
├── models/                # Interacción directa con Firestore, con la colección de los productos del catálogo.
│   └── product.model.js
│
├── routes/                # Rutas agrupadas por dominio (auth/product)
│   ├── auth.routes.js
│   └── product.routes.js
│
├── services/              # Lógica de negocio de los productos. No se genera un archivo de este tipo para usuarios/login
│   └── product.service.js
│
├── utils/                 # Archivo con la generación y verificación del token de JWT
│   └── token-generator.js
│
├── index.js               # Archivo raiz, de ejecución del proyecto.
├── package.json           # Aparte de lo solicitado, del comando start, se utiliza uno test, para aprovechar nodemon.
├── .env                   # Archivo con las variables de entorno.
├── .env.example           # Archivo en el que se presentan las variables de entorno que utiliza el proyecto.
└── README.md


## 🐱‍🏍 Enlace a colección de POSTMAN

https://xsantinos-7055709.postman.co/workspace/xsantinos's-Workspace~e92e41a6-baa9-495e-8aac-cbe8b04fd3de/collection/45819462-83157b50-59ee-4524-bb79-ed0fd29726ca?action=share&creator=45819462&active-environment=45819462-05e53ca8-e136-4b34-a6f9-c65f92b5c2ff
