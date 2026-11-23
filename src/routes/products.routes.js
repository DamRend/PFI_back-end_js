import {Router} from "express";
import { getAllProducts, getProduct, createProduct, deleteProduct } from "../controllers/products.controllers.js";
import {authentication} from "../middlewares/auth.middleware.js";

const router = Router();

//Ruta para obtener todos los productos
router.get("/products", getAllProducts);

//Ruta para obtener 1 producto segun el id
router.get("/products/:id", getProduct);

//Ruta para crear un producto nuevo protegida con token
router.post("/products/create", authentication, createProduct);

//Ruta para borrar un producto por id protegida con token
router.delete("/products/:id", authentication, deleteProduct);


export default router;