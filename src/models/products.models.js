import {db} from "../config/firebase.js";
import {collection, getDocs, addDoc, deleteDoc, doc, getDoc} from "firebase/firestore";

//funcion para traer todos los productos
export const getAllProductsModel = async () => {
    const productsRef = collection(db, "products");
    const snapshot = await getDocs(productsRef);
    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()

    }));
};

//Funcion para buscar un producto por id, reutiliza la funcion que traer todos los productos usando .find
export const getProductByIdModel = async (id) => {
    const products = await getAllProductsModel();
    return products.find(product => product.id == id);

};

//Funcion para crear un producto 
export const createProductModel = async (newProduct) => {
    const productsRef = collection(db, "products");
    const docRef = await addDoc(productsRef, newProduct);
    return {id: docRef.id, ...newProduct};
};

//Funcion para borrar un producto por id, devuelve null si no encuentra el producto
export const deleteProductModel = async (id) =>{
    const productRef = doc(db, "products", id);
    const snapshot = await getDoc(productRef);

    if(!snapshot.exists()){
        return null;
    }

    await deleteDoc(productRef);
    return id;
}