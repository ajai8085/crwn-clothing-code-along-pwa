import './shop-page.styles.scss';
import { Route } from 'react-router-dom';
import React from 'react';
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from '../../firebase/firebase.utils';
import CollectionsOverview from '../../Components/collections-overview/collections-overview.component';
import CollectionPage from '../collection-page/collection-page.component';

import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.action';
import WithSpinner from '../../Components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = { loading: true };
  }
  unsubscribeFormSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');
    this.unsubscribeFormSnapshot = collectionRef.onSnapshot((snapShot) => {
      const converted = convertCollectionsSnapshotToMap(snapShot);
      console.log('converteddd ');
      console.log(converted);
      updateCollections(converted);
      this.setState({ loading: false });
    });
  }

  componentWillUnmount() {
    //this.unsubscribeFormSnapshot.
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionMap) =>
    dispatch(updateCollections(collectionMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
