import React from 'react';
import { Route } from 'react-router-dom';

import './shop.styles.scss';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import Collection from '../collection/collection.component';

const Shop = ({ match, location }) => {
  console.log(match, location);
  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route exact path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

export default Shop;
