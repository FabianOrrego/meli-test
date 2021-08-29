import express from 'express';
import * as ProductApi from '../api/product_api';

const router = express.Router();

router.get('/items', async (req, res) => {
  const search = req.query.search;
  (!!search) 
    ? await ProductApi.getListProducts(search, res)
    : res.status(400).send({ error: 'El campo de busqueda es requerido' });
});

router.get('/items/:id', async (req, res) => {
  const productId = req.params.id;
  (!!productId) 
    ? await ProductApi.getProduct(productId, res)
    : res.status(400).send({ error: 'El id del producto es requerido' });
});

export default router;
