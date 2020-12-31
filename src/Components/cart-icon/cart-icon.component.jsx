import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = ({ toggleCartHidden2, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden2}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispacthToProperties = (dispatch) => ({
  toggleCartHidden2: () => dispatch(toggleCartHidden()),
});

const mapSateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce(
    (accumilatedQty, it) => accumilatedQty + it.quantity,
    0
  ),
});

export default connect(mapSateToProps, mapDispacthToProperties)(CartIcon);
