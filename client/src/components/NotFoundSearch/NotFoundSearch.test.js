import React from 'react'
import { render, screen } from '@testing-library/react';
import NotFoundSearch from './NotFoundSearch';
import './NotFoundSearch.scss';

describe('NotFoundSearch Component', () => {
  test('Should render NotFoundSearch component', () => {
    render(<NotFoundSearch />);
    const component = screen.getByTestId('not-found-search');
    expect(component).toBeInTheDocument();
  });
});
