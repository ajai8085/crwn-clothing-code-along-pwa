import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import { removeItem, addItem, clearItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ dispatch, item }) => {
  const { name, price, quantity, imageUrl } = item;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <div className="arrow" onClick={() => dispatch(removeItem(item.id))}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => dispatch(addItem(item))}>
          &#10095;
        </div>
      </span>

      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => dispatch(clearItem(item.id))}
      >
        &#10005;
      </div>
    </div>
  );
};

export default connect()(CheckoutItem);
