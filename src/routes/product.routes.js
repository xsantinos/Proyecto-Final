//Capa de rutas de los productos
import { Router } from "express";
import productController from '../controllers/product.controller.js'

const router = Router();

//GET
router.get('/', productController.getAllProducts); // OK
router.get('/:id', productController.getProductById);

//POST
router.post('/create', productController.createNewProduct); // OK

//DELETE
router.delete('/:id', productController.deleteProductById);

export default router
