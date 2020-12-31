import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import toggleCartHidden from '../../redux/cart/cart.actions';

const CartIcon = ({ toggleCartHidden2 }) => (
  <div className="cart-icon" onClick={toggleCartHidden2}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispacthToProperties = (dispatch) => ({
  toggleCartHidden2: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispacthToProperties)(CartIcon);
