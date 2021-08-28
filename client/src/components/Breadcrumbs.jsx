import React from 'react';
import '../assets/styles/components/Breadcrumbs.scss'

const Breadcrumbs = ({ crumbsList }) => {
  let breadcrumbs = [];
  if (crumbsList && crumbsList.length > 0) {
    crumbsList.forEach(crumb => {
      breadcrumbs.push(<li className='breadcrumbs-container-item' key={crumb}>{crumb}</li>);
    });
  }
  return (
    <section className='breadcrumbs'>
        <ul className="breadcrumbs-container">
            {breadcrumbs}
        </ul>
    </section>
  );
};

export default Breadcrumbs;