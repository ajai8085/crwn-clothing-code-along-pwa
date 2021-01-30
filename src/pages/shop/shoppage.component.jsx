import './shop-page.styles.scss';
import { Route } from 'react-router-dom';
import React from 'react';

import { connect } from 'react-redux';

import { fetchCollectionStart } from '../../redux/shop/shop.action';

import CollectionOverviewContainer from '../collection-page/collection.container';
import CollectionPageContainer from '../collection-page/collection-page.container';

class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = { loading: true };
  }

  componentDidMount() {
    var { fetchCollectionStart } = this.props;
    fetchCollectionStart();
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
