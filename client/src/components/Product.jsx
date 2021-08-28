import React from 'react';
import imgShipping from '../assets/static/ic_shipping.png';
import { useHistory } from "react-router-dom";

import '../assets/styles/components/Product.scss';

const Product = ({ id, picture, price, title, address }) => {
  const history = useHistory();

  const onHandler = () => {
    history.push(`/items/${id}`);
  }

  return (
    <div onClick={onHandler} className="product-item" data-testid="product-item">
      <div className="product-item-image">
        <img src={picture} alt="Product" />
      </div>
      <div className="product-item-detail">
        <div className="product-item-detail-amount">
          <span data-testid="product-item-detail-amount">{price.amount}</span>
          <img src={imgShipping} alt="shipping" />
        </div>
        <span data-testid="product-item-detail-title" className="product-item-detail-title">{title}</span>
      </div>
      <div className="product-item-location">
        <span data-testid="product-item-location">{address}</span>
      </div>
    </div>
  )
}

export default Product;