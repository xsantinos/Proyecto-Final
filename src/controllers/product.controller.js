// Controlador para productos

import productService from '../services/product.service.js'

//GET
const getAllProducts = async (req,res) => {
    try {
        const products = await productService.getAllProducts();
        if (products.length == 0){
            return res.status(200).json({message: "El catálogo de productos se encuentra vacío"});
        }else{
            res.status(200).json({message: "Catálogo de productos: ", payload: products});
        }
    } catch (error) {
        res.status(500).json({message : "Error interno del servidor al intentar obtener todos los productos del catálogo", error:error.message});
    }
}

const getProductById = async (req,res) => {
    try {
        const {id} = req.params;
        const product = await productService.getProductById(id);

        //Si el producto no se encontró, desde model y service me llega un "null"
        if (product){
            res.status(200).json(product);
        }else{
            res.status(404).json({message: "Producto no encontrado en el catálogo."});
        }
    } catch (error) {
        res.status(500).json({message : "Error interno del servidor al intentar encontrar un producto por su ID", error:error.message});
    }
}

//POST
const createNewProduct = async (req,res) => {
    try {
        const {descripcion, precio} = req.body;
        if (!descripcion || !precio){
            return res.status(400).json({message: "Faltan datos para registrar el producto"});
        }else{
            const newProduct = {descripcion : descripcion, precio: precio}
            const createdProduct = await productService.createNewProduct(newProduct);
            res.status(200).json({message: "Producto ingresado correctamente", payload: createdProduct});
        }
    } catch (error) {
        res.status(500).json({message : "Error interno del servidor al intentar cargar nuevo producto", error:error.message});
    }
}

//DELETE
const deleteProductById = async (req,res) => {
    try {
        const {id} = req.params;
        const boolDelete = await productService.deleteProductById(id);
        if (boolDelete){
            return res.status(200).json({message: `Producto de ID: ${id} eliminado del catálogo`});
        }else{
            res.status(404).json({message: "No se encontró el producto a eliminar."});
        }        
    } catch (error) {
        res.status(500).json({message : "Error interno del servidor al intentar eliminar producto", error:error.message});
    }
}

export default { getAllProducts, getProductById, createNewProduct, deleteProductById };