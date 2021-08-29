import express from 'express';
import cors from 'cors'; 
import dotenv from 'dotenv';
import router  from './routes/product.routes';

dotenv.config()
const app = express();
const { PORT, HOST } = process.env;

app.use(cors());
app.use('/api', router);
app.use((req, res, next) => res.status(404).json({message: "La ruta solicitada no existe."}));
app.use((err, req, res, next) => res.status(500).send({ message: `Error ${err.toString()}` }));

app.listen(PORT, HOST, (err) => {
  (err) ? console.error(err) : console.log(`Servidor iniciado correctamente en ${HOST}:${PORT}`);
});