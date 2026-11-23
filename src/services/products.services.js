import { getAllProductsModel, getProductByIdModel, createProductModel, deleteProductModel } from "../models/products.models.js";

//Capa de servicios de la API

export const getAllProductsService = async () => {
    return await getAllProductsModel();
};

export const getProductByIdService = async (id) =>{
    return await getProductByIdModel(id);
};

export const createProductService = async (newProduct) =>{
    return await createProductModel(newProduct);
};

export const deleteProductService = async (id) =>{
    return await deleteProductModel(id);
};


