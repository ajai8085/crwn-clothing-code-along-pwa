import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import WithSpinner from '../../Components/with-spinner/with-spinner.component';
import CollectionsOverview from '../../Components/collections-overview/collections-overview.component';

import { isLoadingData } from '../../redux/shop/shop.selectors';

const mapStateToProp = createStructuredSelector({
  isLoading: isLoadingData,
});
const CollectionOverviewContainer = compose(
  connect(mapStateToProp),
  WithSpinner
)(CollectionsOverview);

export default CollectionOverviewContainer;
