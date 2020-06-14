import PropTypes from 'prop-types';
import React from 'react';
import {Route} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';

import {fetchCollectionsStart} from '../../redux/shop/shop.actions';
import {getIsCollectionsHasError} from '../../redux/shop/shop.selectors';
import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';
import CollectionContainer from '../collection/collection.container';

class Shop extends React.PureComponent {
  componentDidMount() {
    this.props.fetchCollectionsStart();
  }

  render() {
    const {match, error} = this.props;

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
               component={CollectionOverviewContainer}/>
        <Route exact
               path={`${match.path}/:collectionId`}
               component={CollectionContainer}/>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  error: getIsCollectionsHasError,
});

const mapDispatchToProps = (disaptch) => ({
  fetchCollectionsStart: () => disaptch(fetchCollectionsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);

Shop.propTypes = {
  error: PropTypes.string,
  fetchCollectionsStart: PropTypes.func,
  isFetching: PropTypes.bool,
  isLoaded: PropTypes.bool,
  match: PropTypes.object,
};
