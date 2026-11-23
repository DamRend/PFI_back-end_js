import jwt from "jsonwebtoken";
import "dotenv/config";

const secretKey = process.env.JWT_SECRET_KEY;

export const authentication = (req,res,next) =>{
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if(!token){
        return res.status(401).json({error:"Error de autenticacion, es necesario un TOKEN..."});
    }

    jwt.verify(token, secretKey, (err) =>{
        if(err){
            return res.status(403).json({error: "Error de autenticacion, TOKEN expirado o invalido..."})
        }
        next();
    });
}