import React from 'react'
import { render, screen } from '@testing-library/react';
import Products from './Products'
import useInitialSate from '../../hooks/useInitialState';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    search: 'http://localhost:3000/items?search=iphone'
  })
}));
jest.mock("../../hooks/useInitialState");

describe('Products page', () => {
  beforeEach(() => {
    const data = {
      items: [
        {
          id: 'testId',
          price: { 
            amount: '100000'
          },
          title: 'text title',
          address: 'Manizales',
          categories: ['cat1', 'cat2'],
        }
      ]
    }
    useInitialSate.mockImplementation(() => data);
  });
  test('Should render search component', () => {
    render(<Products />);
    const search = screen.getByTestId('search');
    const breadcrumbs = screen.getByTestId('breadcrumbs');
    const productList = screen.getByTestId('product-list');
    expect(search).toBeInTheDocument();
    expect(breadcrumbs).toBeInTheDocument();
    expect(productList).toBeInTheDocument();
  });
});
