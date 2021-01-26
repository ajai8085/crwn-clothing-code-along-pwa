import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ id, item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>

      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton
        className="custom-button"
        type="button"
        inverted
        onClick={() => addItem(item)}
      >
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispacthToProperties = (dispatch) => ({
  addItem: (cartItem) => dispatch(addItem(cartItem)),
});

export default connect(null, mapDispacthToProperties)(CollectionItem);
