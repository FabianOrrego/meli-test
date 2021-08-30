import express from 'express';
import * as ProductApi from '../api/product_api';
import {cacheResponse} from '../utils/cacheResponse';
import {FIVE_MINUTES} from '../utils/time';

const router = express.Router();

/**
 * Route for get list products
 */
router.get('/items', async (req, res) => {
  cacheResponse(res, FIVE_MINUTES);
  const search = req.query.search;
  (!!search) 
    ? await ProductApi.getListProducts(search, res)
    : res.status(400).send({ error: 'El campo de busqueda es requerido' });
});

/**
 * Route for get detail product
 */
router.get('/items/:id', async (req, res) => {
  cacheResponse(res, FIVE_MINUTES);
  const productId = req.params.id;
  (!!productId) 
    ? await ProductApi.getProduct(productId, res)
    : res.status(400).send({ error: 'El id del producto es requerido' });
});

export default router;
