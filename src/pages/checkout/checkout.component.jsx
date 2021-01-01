import './checkout.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';
import { addItem, removeItem } from '../../redux/cart/cart.actions';
import CheckoutItem from '../../Components/checkout-item/checkout-item.component';

const CheckoutPage = ({ addItem, removeItem, cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>

      <div className="header-block">
        <span>Description</span>
      </div>

      <div className="header-block">
        <span>Quantity</span>
      </div>

      <div className="header-block">
        <span>Price</span>
      </div>

      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>

    {cartItems.map((cartItem) => (
      <CheckoutItem item={cartItem} key={cartItem.id} />
    ))}

    <div className="total">
      <span>TOTAL:${total}</span>
    </div>
  </div>
);

const mapDispatherToProps = (dispather) => ({
  addItem: (cartItem) => dispather(addItem(cartItem)),
  removeItem: (id) => dispather(removeItem(id)),
});

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps, mapDispatherToProps)(CheckoutPage);
