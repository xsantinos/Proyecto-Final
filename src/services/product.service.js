// Servicios de los productos
import {getAllProductsModel, createNewProductModel, getProductByIdModel, deleteProductByIdModel } from '../models/product.model.js'


//GET -> Para obtener todos los productos y uno por su ID
const getAllProducts = async () => {
    return await getAllProductsModel();
};
const getProductById = async (id) => {
    return await getProductByIdModel(id);
};

//POST -> Para crear un producto nuevo en el catálogo.
const createNewProduct = async (product) => {
    return await createNewProductModel(product);
}

//DELETE -> Para eliminar un producto del catálogo por su id.
const deleteProductById = async (id) => {
    return await deleteProductByIdModel(id);
};

export default { getAllProducts, getProductById, createNewProduct, deleteProductById };
