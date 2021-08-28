import React from 'react';
import '../assets/styles/components/ProductList.scss';

const ProductList = ({ children }) => (
  <section className="product-list" data-testid="product-list">
    {children}
  </section>
);


export default ProductList;