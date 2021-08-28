import React from 'react'
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
import Search from './Search';
import '../assets/styles/components/Search.scss';
import logo from '../assets/static/Logo_ML.png';
import iconSearch from '../assets/static/ic_Search.png';


/*beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())*/


test('loads and displays greeting', () => {
    render(<Search />);
    const inputSearch = screen.queryByTestId('search');
    console.log(inputSearch);
    expect(inputSearch).toBeInTheDocument();
})

  test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});