import './collection-page.style.scss';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';
// import { createStructuredSelector } from 'reselect';
const CollectionPage = ({ collection, match }) => {
  console.log(collection);

  return <div className="collection-page">collection page</div>;
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

// createStructuredSelector({ data: selectCollection });
export default connect(mapStateToProps)(CollectionPage);
