import React from 'react'
import { render, screen } from '@testing-library/react';
import Detail from './Detail'
import useInitialSate from '../../hooks/useInitialState';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: 'testId'
  })
}));

jest.mock("../../hooks/useInitialState");

describe('Detail page', () => {
  beforeEach(() => {
    const data = {
      initialState: {
        item: {
          id: 'testId',
          price: { 
            amount: '100000'
          },
          title: 'text title',
          address: 'Manizales',
          categories: ['cat1', 'cat2']
        },
      },
      loading: false
    };
    useInitialSate.mockImplementation(() => data);
  })
  
  test.only('should render search component', async () => {
    render(<Detail />);
    const search = screen.getByTestId('search');
    const breadcrumbs = screen.getByTestId('breadcrumbs');
    const productList = screen.getByTestId('product-detail-component');
    expect(search).toBeInTheDocument();
    expect(breadcrumbs).toBeInTheDocument();
    expect(productList).toBeInTheDocument();
  });
})
