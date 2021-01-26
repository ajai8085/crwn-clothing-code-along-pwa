import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { isLoadingData } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../Components/with-spinner/with-spinner.component';
import CollectionPage from './collection-page.component';

const mapStateToProp = createStructuredSelector({
  isLoading: isLoadingData,
});

const CollectionPageContainer = compose(
  connect(mapStateToProp),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
