import express from 'express';
import * as ProductApi from '../api/product_api';
import {cacheResponse} from '../utils/cacheResponse';
import {FIVE_MINUTES} from '../utils/time';

const router = express.Router();

router.get('/items', async (req, res) => {
  cacheResponse(res, FIVE_MINUTES);
  const search = req.query.search;
  (!!search) 
    ? await ProductApi.getListProducts(search, res)
    : res.status(400).send({ error: 'El campo de busqueda es requerido' });
});

router.get('/items/:id', async (req, res) => {
  cacheResponse(res, FIVE_MINUTES);
  const productId = req.params.id;
  (!!productId) 
    ? await ProductApi.getProduct(productId, res)
    : res.status(400).send({ error: 'El id del producto es requerido' });
});

export default router;
