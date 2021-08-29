import React from 'react'
import { Router, Link } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event'
import './NotFound.scss';

describe('NotFound Page', () => {
    test('Should render all components of the Detail view', () => {
        const history = createMemoryHistory();
        render(<Router history={history}>
            <h1>404 - Not Found!</h1>
            <Link to="/">Ir al Inicio</Link>
            </Router>);
        const button = screen.getByText('Ir al Inicio');
        userEvent.click(button);
        expect(history.location.pathname).toEqual(`/`);
    });
});
