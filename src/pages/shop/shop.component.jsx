import React from 'react';
import { connect } from 'react-redux';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { createStructuredSelector } from 'reselect';
import { getCollections } from '../../redux/shop/shop.selectors';

const Shop = ({ collections }) => {
  return (
    <div className='shop-page'>
      {
        collections.map(({ id, ...otherCollectionsProps }) => <CollectionPreview
          key={id} {...otherCollectionsProps}/>)
      }
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: getCollections,
})

export default connect(mapStateToProps)(Shop);
