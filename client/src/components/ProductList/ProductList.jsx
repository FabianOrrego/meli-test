import React from 'react';
import './ProductList.scss';

const ProductList = ({ children }) => (
  <section className="product-list" data-testid="product-list">
    {children}
  </section>
);


export default ProductList;