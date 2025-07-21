// Capa de modelo para productos
import { db } from "../config/db.js";

//Se importan todas las funciones que vamos a utilizar de firestore 
//(update no se utiliza en este trabajo)
import {
    collection,
    doc,
    getDoc,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
} from "firebase/firestore";

const productCollection = collection(db, "productos");


//GET -> Para obtener todos los productos y uno por su ID
export const getAllProductsModel = async () => {
    try {
        const catalogo = await getDocs(productCollection)
        const products = [];
        catalogo.forEach((doc) => {
            const productData = doc.data();
            products.push({ id: doc.id,
                            descripcion: productData.descripcion,
                            precio: productData.precio });
        });
        return products;
    } catch (error) {
        throw new Error("Error", error.message);
    }
};

export const getProductByIdModel = async (id) => {
    try {
        const productDoc = await getDoc(doc(productCollection, id));
        if (productDoc.exists()) {
            const { descripcion, precio } = productDoc.data();
            return {
                id: productDoc.id,
                descripcion,
                precio
            }
        } else {
            return null;
        }
    } catch (error) {
        throw new Error("Error al buscar el producto: " + error.message);
    }
}

//POST -> Para crear un producto nuevo en el catálogo.
export const createNewProductModel = async (product) => {
    try {
        const newProduct = await addDoc(productCollection, product);
        const createdProduct = await getDoc(newProduct);
        const { descripcion, precio } = createdProduct.data();
        return {
            id: newProduct.id,
            descripcion,
            precio
        };
    } catch (error) {
        throw new Error("Error al crear el producto: " + error.message);
    }
}

//DELETE -> Para eliminar un producto del catálogo por su id.
export const deleteProductByIdModel = async (id) => {
    try {
        //deleteDoc si borra bien devuelve una Promise vacía, entonces para 
        //indicar que salió bien, devuelvo un true
        await deleteDoc(doc(productCollection, id));
        return true;
    } catch (error) {
        throw new Error("Error intentando eliminar el producto: " + error.message);
    }
}
