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
    <div onClick={onHandler} className="product-item">
      <div className="product-item-image">
        <img src={picture} alt="Product" />
      </div>
      <div className="product-item-detail">
        <div className="product-item-detail-amount">
          <span>{price.amount}</span>
          <img src={imgShipping} alt="shipping" />
        </div>
        <span className="product-item-detail-title">{title}</span>
      </div>
      <div className="product-item-location">
        <span>{address}</span>
      </div>
    </div>
  )
}

export default Product;