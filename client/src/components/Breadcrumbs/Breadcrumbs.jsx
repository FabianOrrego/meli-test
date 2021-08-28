import React from 'react';
import './Breadcrumbs.scss';

const Breadcrumbs = ({ crumbsList }) => {
  let breadcrumbs = [];
  if (crumbsList && crumbsList.length > 0) {
    crumbsList.forEach((crumb, i) => {
      breadcrumbs.push(<li data-testid={`crubm-${i+1}`} className='breadcrumbs-container-item' key={crumb}>{crumb}</li>);
    });
  }
  return (
    <section className='breadcrumbs' data-testid="breadcrumbs">
        <ul className="breadcrumbs-container">
            {breadcrumbs}
        </ul>
    </section>
  );
};

export default Breadcrumbs;