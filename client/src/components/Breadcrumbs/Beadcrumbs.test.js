import React from 'react'
import { render, screen } from '@testing-library/react';
import Breadcrumbs from './Breadcrumbs';
import './Breadcrumbs.scss'

describe('Breadcrumbs component', () => {
  test('Should render breadcrums component', () => {
    render(<Breadcrumbs />);
    const component = screen.getByTestId('breadcrumbs');
    expect(component).toBeInTheDocument();
  });
  
  test('Crumbs should be on the screen', () => {
    const crumbs = ['Electrodomesticos', 'Televisor'];
    render(<Breadcrumbs crumbsList={crumbs}/>);
    const firstCrumb = screen.getByTestId('crubm-1');
    const secondCrumb = screen.getByTestId('crubm-2');
    expect(firstCrumb).toBeInTheDocument();
    expect(secondCrumb).toBeInTheDocument();
  });
});
