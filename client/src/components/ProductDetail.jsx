import React from 'react';
import numeral from 'numeral';

import '../assets/styles/components/ProductDetail.scss';

const ProductDetail = ({ description, picture, title, price }) => (
  <section className="product-container">
    <div className="product-detail">
      <div className="product-detail-main">
        <div className="product-detail-main-image">
          <img src={picture} alt="product" />
        </div>
        <div className="product-detail-main-general">
          <span className="product-detail-main-general-subtitle">
            nuevo 234 - vendidos
          </span>
          <h3 className="product-detail-main-general-title">{title}</h3>
          <h2 className="product-detail-main-general-amount">{numeral(price.amount).format('$0,0.00')}</h2>
          <button className="product-detail-main-general-button">Comprar</button>
        </div>
      </div>
      <div className="product-detail-description">
        <h3>Descripción del producto</h3>
        <article>{description}</article>
      </div>
    </div>
  </section>
);

export default ProductDetail;