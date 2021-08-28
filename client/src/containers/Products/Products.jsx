import React from 'react';
import useInitialSate from '../../hooks/useInitialState';
import Search from '../../components/Search/Search';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import ProductList from '../../components/ProductList/ProductList';
import Product from '../../components/Product/Product';
import { useLocation } from "react-router-dom";

const Products = () => {
  const query = new URLSearchParams(useLocation().search);
  const API = `${process.env.REACT_APP_HOST_API}items?search=${query.get("search")}`;
  const initialState = useInitialSate(API);
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