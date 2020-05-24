import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.util';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import Collection from '../collection/collection.component';
import { updateCollections } from '../../redux/shop/shop.actions';

class Shop extends React.PureComponent {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    });
  }

  render() {

    const { match } = this.props;

    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionOverview}/>
        <Route exact path={`${match.path}/:collectionId`} component={Collection}/>
      </div>
    );
  }
}

const mapDispatchToProps = (disaptch) => ({
  updateCollections: (collections) => {
    return disaptch(updateCollections(collections));
  }
});

export default connect(null, mapDispatchToProps)(Shop);
