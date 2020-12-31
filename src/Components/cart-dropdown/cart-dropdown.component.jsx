import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { addItem, removeItem } from '../../redux/cart/cart.actions.js';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({ cartItems, addItem, removeItem }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {console.log(cartItems)}
      {cartItems.map((it) => (
        <CartItem key={it.id} item={it} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapSateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  removeItem: (id) => dispatch(removeItem(id)),
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(mapSateToProps, mapDispatchToProps)(CartDropdown);
