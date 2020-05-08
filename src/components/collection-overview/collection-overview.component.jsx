import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';
import { getCollectionsForPreview } from '../../redux/shop/shop.selectors';

const CollectionOverview = ({ collections }) => {
  return (
    <div className='collections-overview'>
      {
        collections.map(({ id, ...otherCollectionsProps }) => <CollectionPreview
          key={id} {...otherCollectionsProps}/>)
      }
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: getCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
