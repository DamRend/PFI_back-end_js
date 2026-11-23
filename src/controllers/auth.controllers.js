import {generateToken} from "../services/auth.services.js";

const defaultUser ={
    email: process.env.ADMIN_EMAIL,
    password: process.env.ADMIN_PASSWORD
};

export const login = async (req, res) =>{
    const {email,password} = req.body;

    if(!email || !password){
        return res.status(400).json({error: "Error: porfavor ingrese usuario y contraseña validos..."});
    }

    if(email === defaultUser.email && password === defaultUser.password){
        const token = generateToken(defaultUser);
        res.status(200).json({
            message: "Usuario y contraseña validos",
            token: token
        });
    }else{
        res.status(401).json({error: "Usuario y contraseña invalidos, intentelo nuevamente..."});
    }
};