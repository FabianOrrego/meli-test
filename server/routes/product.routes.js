import express from 'express';
import * as ProductController from '../controllers/product.controller';

const router = express.Router();

router.get('/items', async (req, res) => {
  const search = req.query.search;
  (!!search) 
    ? await ProductController.getListProducts(search, res)
    : res.status(400).send({ error: 'El campo de busqueda es requerido' });
});

router.get('/items/:id', async (req, res) => {
  const productId = req.params.id;
  (!!productId) 
    ? await ProductController.getProduct(productId, res)
    : res.status(400).send({ error: 'El id del producto es requerido' });
});

export default router;
