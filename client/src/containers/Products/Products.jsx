import React from 'react';
import useInitialSate from '../../hooks/useInitialState';
import Search from '../../components/Search/Search';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import ProductList from '../../components/ProductList/ProductList';
import Product from '../../components/Product/Product';
import NotFoundSearch from '../../components/NotFoundSearch/NotFoundSearch';
import { useLocation } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";

const Products = () => {
  const query = new URLSearchParams(useLocation().search);
  const API = `${process.env.REACT_APP_HOST_API}items?search=${query.get("search")}`;
  const  { initialState, loading } = useInitialSate(API);
  return (
    <>
      <Search />
      <Breadcrumbs crumbsList={initialState.categories} />
      <BeatLoader loading={loading} size={30} />
      {
        initialState?.items?.length > 0 &&
        <ProductList>
          {initialState.items.map(item =>
            <Product key={item.id} {...item} />
          )}
        </ProductList>
      }
      {
        initialState?.items?.length === 0 &&
        <NotFoundSearch />
      }
    </>
  );
}

export default Products;