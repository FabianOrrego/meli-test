import axios from 'axios';
import * as ProductTransformer from '../transformers/product_transformer';

const PRODUCTS_LIMIT = 4;

/**
 * 
 * @param {*} querySearch 
 * @param {*} res 
 * Get the list product in the expected format
 */
const getListProducts = async (querySearch, res) => {
  try {
    const response = await axios.get(`${process.env.URL_API_ML}sites/MLA/search?q=${querySearch}&limit=${PRODUCTS_LIMIT}`);
    res.json(ProductTransformer.setFormatProductsList(response.data));
  } catch (error) {
    res.send(error);
  }
}

/**
 * 
 * @param {*} productId 
 * @param {*} res 
 * Get detail product in the expected format
 */
const getProduct = async (productId, res) => {
  const response = await axios.all([
    axios.get(`${process.env.URL_API_ML}items/${productId}`),
    axios.get(`${process.env.URL_API_ML}items/${productId}/description`)
  ]);
  const responseCategories = await axios.get(`${process.env.URL_API_ML}categories/${response[0].data.category_id}`);
  res.json(ProductTransformer.setFormatProductDetail(response, responseCategories.data.path_from_root));
}

export { getListProducts, getProduct };
