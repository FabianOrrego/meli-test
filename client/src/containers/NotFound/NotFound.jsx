import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss';

const NotFound = () => (
  <div className="container-not-found" data-testid="container-not-found">
    <header className="container-not-found-header"></header>
    <div className="container-not-found-description">
      <h1>404 - Not Found!</h1>
      <Link to="/" data-testid="link-not-found">
        Ir al Inicio
      </Link>
    </div>
  </div>
);

export default NotFound;