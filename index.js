import  'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from "./src/routes/products.routes.js"
import authRouter from "./src/routes/auth.routes.js"


const app = express();

// Middlewares importados
app.use(cors());
app.use(bodyParser.json());


// Rutas

app.use("/api", router);
app.use("/auth",authRouter);

// Error 404 
app.use((req, res) => {
    res.status(404).json({
        error: "404 ruta no encontrada",
        mensaje: `el recurso ${req.url} no existe`
    });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});
