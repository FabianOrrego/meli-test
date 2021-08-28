import React from 'react'
import { render, screen } from '@testing-library/react';
import ProductList from './ProductList';
import '../assets/styles/components/ProductList.scss';

test('should render ProductList component', () => {
  render(<ProductList />);
  const component = screen.getByTestId('product-list');
  expect(component).toBeInTheDocument();
});
