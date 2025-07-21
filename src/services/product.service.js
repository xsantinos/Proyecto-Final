// Servicios de los productos
import {getAllProductsModel, createNewProductModel, getProductByIdModel, deleteProductByIdModel } from '../models/product.model.js'


// GET
const getAllProducts = async () => {
    return await getAllProductsModel();
};

const getProductById = async (id) => {
    return await getProductByIdModel(id);
};

//POST
const createNewProduct = async (product) => {
    return await createNewProductModel(product);
}

//DELETE
const deleteProductById = async (id) => {
    return await deleteProductByIdModel(id);
};

export default { getAllProducts, getProductById, createNewProduct, deleteProductById}
