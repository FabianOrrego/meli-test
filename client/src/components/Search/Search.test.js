import React from 'react'
import {render, screen} from '@testing-library/react';
import { Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import Search from './Search';
import './Search.scss';

describe('Search Component', () => {
  test('Should render search component', () => {
    render(<Search />);
    const component = screen.getByTestId('search');
    expect(component).toBeInTheDocument();
});

test('Input should be correct value', () => {
  render(<Search />);
  const inputSearch = screen.getByTestId('input-search');
  const searchText = 'iphone';
  userEvent.type(inputSearch, searchText);
  expect(inputSearch.value).toEqual(searchText);
});

test('When submitting the form should redirect', () => {
  const history = createMemoryHistory();
  render(<Router history={history}><Search /></Router>);
  const inputSearch = screen.getByTestId('input-search');
  const searchText = 'ipod';
  userEvent.type(inputSearch, searchText);
  const button = screen.getByTestId('search-submit-button');
  userEvent.click(button);
  expect(history.location.pathname).toEqual(`/items`);
})
});
