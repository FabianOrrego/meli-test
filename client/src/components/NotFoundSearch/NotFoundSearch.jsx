import React from 'react';
import './NotFoundSearch.scss';

const NotFoundSearch = () => (
  <section className="not-found-search" data-testid="not-found-search">
    <div className="not-found-search-message">
      <span>No se encontraron productos para tu busqueda</span>
    </div>
  </section>
);

export default NotFoundSearch;