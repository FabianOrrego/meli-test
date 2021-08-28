import React from 'react'
import { render, screen } from '@testing-library/react';
import NotFoundSearch from './NotFoundSearch';
import './NotFoundSearch.scss';

test('should render NotFoundSearch component', () => {
  render(<NotFoundSearch />);
  const component = screen.getByTestId('not-found-search');
  expect(component).toBeInTheDocument();
});
