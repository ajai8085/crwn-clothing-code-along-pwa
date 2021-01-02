import './shop-page.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { shopDataSelector } from '../../redux/shop/shop.selectors';

import { CollectionPreview } from '../../Components/collection-preview/collection-preview.component';
const ShopPage = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...otherProps }) => (
      <CollectionPreview key={id} {...otherProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: shopDataSelector,
});
export default connect(mapStateToProps)(ShopPage);
