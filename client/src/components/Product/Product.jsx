import React from 'react';
import imgShipping from '../../assets/static/ic_shipping.png';
import { useHistory } from "react-router-dom";
import numeral from 'numeral';
import './Product.scss';

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
      <main className="product-item-detail">
        <div className="product-item-detail-amount">
          <span data-testid="product-item-detail-amount">{numeral(price.amount).format('$ 0,0[.]00')}</span>
          <img src={imgShipping} alt="shipping" />
        </div>
        <header data-testid="product-item-detail-title" className="product-item-detail-title">{title}</header>
      </main>
      <div className="product-item-location">
        <span data-testid="product-item-location">{address}</span>
      </div>
    </div>
  )
}

export default Product;