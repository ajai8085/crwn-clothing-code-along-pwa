import './shop-page.styles.scss';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import CollectionsOverview from '../../Components/collections-overview/collections-overview.component';
import CategoryPage from '../category/category.component';
import CollectionPage from '../collection-page/collection-page.component';

const ShopPage = ({ history, location, match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
