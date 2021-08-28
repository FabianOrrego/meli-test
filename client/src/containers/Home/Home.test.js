import React from 'react'
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('Should render all components of the Detail view', () => {
  render(<Home />);
  const searchComponent = screen.getByTestId('search');
  expect(searchComponent).toBeInTheDocument();
});
