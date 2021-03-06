import './shop-page.styles.scss';
import { Route } from 'react-router-dom';
import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import { fetchCollectionStart } from '../../redux/shop/shop.action';

import CollectionOverviewContainer from '../collection-page/collection.container';
import CollectionPageContainer from '../collection-page/collection-page.container';

const ShopPage = ({ fetchCollectionStart, match }) => {
  useEffect(() => {
    fetchCollectionStart();
  }, [fetchCollectionStart]);

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
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
