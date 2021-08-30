/**
 * 
 * @param {*} response 
 * @returns 
 * Transform product list response to the expected format 
 */
const setFormatProductsList = (response) => {
  return {
    categories: response?.filters?.length > 0
      ? getCategories((response?.filters?.find((filter) => filter?.id === 'category')).values[0].path_from_root)
      : [],
    items: response.results.map(item => formatItem(item))
  }
}

/**
 * 
 * @param {*} response 
 * @param {*} categories 
 * @returns 
 * Transform detail product response to the expected format 
 */
const setFormatProductDetail = (response, categories) => {
  return {
    item: {
      ...formatItem(response[0].data),
      sold_quantity: response[0].data.sold_quantity,
      description: response[1].data.plain_text,
      categories: getCategories(categories)
    },
  }
}

/**
 * 
 * @param {*} categories 
 * @returns 
 * get categories
 */
const getCategories = (categories) => {
  return categories.map((category) => category.name);;
}

/**
 * 
 * @param {*} item 
 * @returns 
 * Format to product
 */
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

export { setFormatProductsList, setFormatProductDetail };