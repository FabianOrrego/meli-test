import React from 'react';
import useInitialSate from '../../hooks/useInitialState';
import Search from '../../components/Search';
import Breadcrumbs from '../../components/Breadcrumbs';
import ProductList from '../../components/ProductList';
import Product from '../../components/Product';
import { useLocation } from "react-router-dom";

const Products = () => {
  const API = 'http://localhost:3000/api/items?search=';
  const query = new URLSearchParams(useLocation().search);
  const initialState = useInitialSate(`${API}${query.get("search")}`);
  return (
    <>
      <Search />
      <Breadcrumbs crumbsList={initialState.categories} />
      {
        initialState?.items?.length > 0 &&
          <ProductList>
            {initialState.items.map(item => 
            <Product key={item.id} {...item} />
            )}
          </ProductList>
      }
    </>
  );
}

export default Products;