import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {getIsCollectionsFetching} from '../../redux/shop/shop.selectors';
import WithSpinner from '../../hocs/with-spinner/with-spinner.component';
import CollectionOverview from './collection-overview.component';
import {compose} from 'redux';

const mapStateToProps = createStructuredSelector({
  isLoading: getIsCollectionsFetching,
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner,
)(CollectionOverview);

export default CollectionOverviewContainer;
