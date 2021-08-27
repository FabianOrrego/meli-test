import express from 'express';
import cors from 'cors'; 
import dotenv from 'dotenv';
import router  from './routes/product.routes';

dotenv.config()
const app = express();
const { PORT, HOST } = process.env;

app.use(cors());
app.use('/api', router);

app.listen(PORT, HOST, (err) => {
  (err) ? console.log(err) : console.log(`Servidor iniciado correctamente en ${HOST}:${PORT}`);
});