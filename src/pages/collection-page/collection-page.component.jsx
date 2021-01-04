import './collection-page.style.scss';
import { connect } from 'react-redux';
import { selectCollectionItemsBySection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../Components/collection-item/collection-item.component';

// import { createStructuredSelector } from 'reselect';
const CollectionPage = ({ collection }) => {
  const { title, items } = collection;

  return (
    <div className="collection-page">
      <div className="title">{title}</div>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollectionItemsBySection(
    ownProps.match.params.collectionId
  )(state),
});

// createStructuredSelector({ data: selectCollection });
export default connect(mapStateToProps)(CollectionPage);
