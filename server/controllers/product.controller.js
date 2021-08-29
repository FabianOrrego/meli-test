import axios from 'axios';

const PRODUCTS_LIMIT = 4;

const getListProducts = async (querySearch, res) => {
  try {
    const response = await axios.get(`${process.env.URL_API_ML}sites/MLA/search?q=${querySearch}&limit=${PRODUCTS_LIMIT}`);
    res.json(setFormatProductsList(response.data));
  } catch (error) {
    res.send(error);
  }
}

const getProduct = async (productId, res) => {
  const response = await axios.all([
    axios.get(`${process.env.URL_API_ML}items/${productId}`),
    axios.get(`${process.env.URL_API_ML}items/${productId}/description`)
  ]);
  const responseCategories = await axios.get(`${process.env.URL_API_ML}categories/${response[0].data.category_id}`);
  res.json(setFormatProductDetail(response, responseCategories.data.path_from_root));
}

const setFormatProductsList = (response) => {
  return {
    author: getAuthor(),
    categories: response?.filters?.length > 0 
      ? getCategories((response?.filters?.find((filter) => filter?.id === 'category')).values[0].path_from_root)
      : [],
    items: response.results.map(item => formatItem(item))
  }
}

const setFormatProductDetail = (response, categories) => {
  return {
    author: getAuthor(),
    item: {
      ...formatItem(response[0].data),
      sold_quantity: response[0].data.sold_quantity,
      description: response[1].data.plain_text,
      categories: getCategories(categories)
    },
  }
}

const getAuthor = () => {
  return { name: 'Fabian', lastname: 'Orrego' };
}

const getCategories = (categories) => {
  return categories.map((category) => category.name);;
}

const formatItem = (item) => {
  return {
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: item.price,
      // decimal: TO DO Not Found
    },
    picture: item.thumbnail,
    condition: item.condition === 'new' ? 'Nuevo' : 'Usado',
    free_shipping: item.shipping.free_shipping,
    address: item?.address?.state_name
  }
}

export { getListProducts, getProduct };
