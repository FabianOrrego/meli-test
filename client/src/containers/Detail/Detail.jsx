import React from 'react';
import useInitialSate from '../../hooks/useInitialState';
import Search from '../../components/Search/Search';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const API = `${process.env.REACT_APP_HOST_API}items/${id}`;
  const initialState = useInitialSate(API);
  return (
    <>
      <Search />
      {initialState?.item?.categories.length > 0 &&
        <Breadcrumbs crumbsList={initialState.item.categories} />}
      {initialState?.item &&
        <ProductDetail key={initialState.item.id} {...initialState.item}/>}
    </>
  );
}

export default Detail;