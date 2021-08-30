import React from 'react'
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import Product from './Product';
import numeral from 'numeral';
import './Product.scss';

const product = {
  id: 'testId',
  price: { 
    amount: '100000'
  },
  title: 'text title',
  address: 'Manizales'
};

describe('Product Component', () => {
  test('Should render product component', () => {
    render(<Product key={product.id} {...product}/>);
    const component = screen.getByTestId('product-item');
    expect(component).toBeInTheDocument();
  });
  
  test('Elements should have the correct values', () => {
    render(<Product key={product.id} {...product}/>);
    const title = screen.getByTestId('product-item-detail-title');
    const amount = screen.getByTestId('product-item-detail-amount');
    const address = screen.getByTestId('product-item-location');
    expect(title.textContent).toEqual(product.title);
    expect(amount.textContent).toEqual(numeral(product.price.amount).format('$ 0,0[.]00'));
    expect(address.textContent).toEqual(product.address);
  });
  
  test('When the component is clicked it should be redirect', () => {
    const history = createMemoryHistory();
    render(<Router history={history}><Product key={product.id} {...product} /></Router>);
    const component = screen.getByTestId('product-item');
    userEvent.click(component);
    expect(history.location.pathname).toEqual(`/items/${product.id}`);
  })
});

