import React from 'react'
import { render, screen } from '@testing-library/react';
import ProductDetail from './ProductDetail';
import numeral from 'numeral';
import './ProductDetail.scss';

const productDetail = {
  item: {
    id: 'testId',
    description: 'Descripción del producto',
    title: 'Titulo del producto',
    price: { 
      amount: '20000'
    },
  }
};

describe('ProductDetail Component', () => {
  test('should render product component', () => {
    render(<ProductDetail key={productDetail.item.id} {...productDetail.item} />);
    const component = screen.getByTestId('product-detail-component');;
    expect(component).toBeInTheDocument();
  });
  
  test('Elements should have the correct values', () => {
    render(<ProductDetail key={productDetail.item.id} {...productDetail.item} />);
    const description = screen.getByTestId('product-detail-description');
    const title = screen.getByTestId('product-detail-main-general-title');
    const amount = screen.getByTestId('product-detail-main-general-amount');
    expect(description.textContent).toEqual(productDetail.item.description);
    expect(title.textContent).toEqual(productDetail.item.title);
    expect(amount.textContent).toEqual(numeral(productDetail.item.price.amount).format('$ 0,0[.]00'));
  });
});

