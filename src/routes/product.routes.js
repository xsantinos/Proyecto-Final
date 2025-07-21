//Capa de rutas de los productos
import { Router } from "express";
import productController from '../controllers/product.controller.js'

const router = Router();

//GET -> Para obtener todos los productos y uno por su ID
router.get('/', productController.getAllProducts); 
router.get('/:id', productController.getProductById);

//POST -> Para crear un producto nuevo en el catálogo.
router.post('/create', productController.createNewProduct);

//DELETE -> Para eliminar un producto del catálogo por su id.
router.delete('/:id', productController.deleteProductById);

export default router
