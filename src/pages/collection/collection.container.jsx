import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {getIsCollectionsLoaded} from '../../redux/shop/shop.selectors';
import WithSpinner from '../../hocs/with-spinner/with-spinner.component';
import Collection from './collection.component';
import {compose} from 'redux';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !getIsCollectionsLoaded(state),
});

const CollectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner,
)(Collection);

export default CollectionContainer;
