import React from 'react';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import Collection from '../collection/collection.component';
import withSpinner from '../../hocs/with-spinner/with-spinner.component';
import {
  getIsCollectionsFetching,
  getIsCollectionsHasError,
  getIsCollectionsLoaded
} from '../../redux/shop/shop.selectors';

const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);
const CollectionWithSpinner = withSpinner(Collection);

class Shop extends React.PureComponent {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match, isFetching, error, isLoaded } = this.props;

    if (error) {
      return (
        <div>
          <h2>{error}</h2>
        </div>
      );
    }

    // TODO try refactor isFetching & isLoaded
    return (
      <div className='shop-page'>
        <Route exact
               path={`${match.path}`}
               render={(props) => <CollectionOverviewWithSpinner isLoading={isFetching} {...props} />}/>
        <Route exact
               path={`${match.path}/:collectionId`}
               render={(props) => <CollectionWithSpinner isLoading={!isLoaded} {...props} />}/>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isFetching: getIsCollectionsFetching,
  isLoaded: getIsCollectionsLoaded,
  error: getIsCollectionsHasError,
});

const mapDispatchToProps = (disaptch) => ({
  fetchCollectionsStartAsync: () => disaptch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
