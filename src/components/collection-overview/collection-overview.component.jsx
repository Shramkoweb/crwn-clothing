import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';
import {getCollectionsForPreview} from '../../redux/shop/shop.selectors';
import {CollectionsOverviewContainer} from './collections-overview.styles';

const CollectionOverview = ({collections}) => {
  return (
      <CollectionsOverviewContainer>
        {
          collections.map(({id, ...otherCollectionsProps}) => <CollectionPreview
              key={id} {...otherCollectionsProps}/>)
        }
      </CollectionsOverviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: getCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
