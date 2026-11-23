import { getAllProductsService, getProductByIdService, createProductService, deleteProductService } from "../services/products.services.js";

//Capa controladora de la API, manejo de errores

export const getAllProducts = async (req, res) =>{
    try {
        const products = await getAllProductsService();
        res.status(200).json({
            message: "Productos encontrados con exito: ",
            data: products

        });
    } catch (error) {
        res.status(500).json({ error: "Error interno al tratar de obtener productos" });
    }
};

export const getProduct = async (req, res) => {
    const {id} = req.params;
    try{
        const product = await getProductByIdService(id);
        if(product){
            res.status(200).json({
                message: `Producto con id:${id} encontrado con exito:`,
                data: product
            })
        }else{
            res.status(404).json({error: `No se encontro el producto con id:${id}`});
        }
    }catch(error){
        console.error(error);
        res.status(500).json({error: "Error al intentar obtener producto"})
    } 
};

export const createProduct = async (req, res) => {
    const {nombre, precio, categoria, stock} = req.body;
    if(!nombre || !categoria || typeof precio !== "number" || !Number.isInteger(stock)){
        return res.status(400).json({error: "Error, Faltan datos obligatorioa para agregar el producto..."})
    }
    try{
        const newProduct = await createProductService({nombre, precio, categoria, stock});
        res.status(201).json({
            message: `Producto -${newProduct.nombre}- creado con exito.`,
            data: newProduct
        })
    }catch(error){
        console.error(error);
        res.status(500).json({error: "Error interno al intentar crear el producto"});
    }
}

export const deleteProduct = async (req, res) =>{
    const {id} = req.params;
    try{
        const idBorrado = await deleteProductService(id);
        if(idBorrado){
            res.status(200).json({
                message: `Producto con id:${id} eliminado con exito.`,
                data: idBorrado
            })
        }else{
            res.status(404).json({
                error: `No se encontro el producto con id:${id}.`
            })
        }

    }catch(error){
        console.error(error);
        res.status(500).json({error: "Error interno al intentar eliminar un producto."})
    }
};

