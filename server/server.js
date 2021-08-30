import express from 'express';
import cors from 'cors'; 
import dotenv from 'dotenv';
import router  from './routes/product.routes';
import helmet from 'helmet';
import signResponse from './middlewares/signResponse';

dotenv.config()
const app = express();
const { PORT, HOST, ENV } = process.env;

if (ENV !== 'development') {
  console.log("entre a prod");
  app.use(express.static(`./public`));
  app.use(helmet());
  app.use(helmet.permittedCrossDomainPolicies());
  app.disable('x-powered-by');
}

app.use(cors());
app.use(signResponse);
app.use('/api', router);
app.use((req, res, next) => res.status(404).json({message: "La ruta solicitada no existe."}));
app.use((err, req, res, next) => res.status(500).send({ message: `Error ${err.toString()}` }));

app.listen(PORT, HOST, (err) => {
  (err) ? console.error(err) : console.log(`Servidor iniciado correctamente en ${HOST}:${PORT}`);
});