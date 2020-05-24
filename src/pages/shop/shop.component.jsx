import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.util';

import { updateCollections } from '../../redux/shop/shop.actions';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import Collection from '../collection/collection.component';
import withSpinner from '../../hocs/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);
const CollectionWithSpinner = withSpinner(Collection);

class Shop extends React.PureComponent {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;

    return (
      <div className='shop-page'>
        <Route exact
               path={`${match.path}`}
               render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />}/>
        <Route exact
               path={`${match.path}/:collectionId`}
               render={(props) => <CollectionWithSpinner isLoading={loading} {...props} />}/>
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
