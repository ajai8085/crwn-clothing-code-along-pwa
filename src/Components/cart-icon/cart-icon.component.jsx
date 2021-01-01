import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemCount } from '../../redux/cart/cart.selectors';
const CartIcon = ({ toggleCartHidden2, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden2}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispacthToProperties = (dispatch) => ({
  toggleCartHidden2: () => dispatch(toggleCartHidden()),
});

const mapSateToProps = (state) => ({ itemCount: selectCartItemCount(state) });

export default connect(mapSateToProps, mapDispacthToProperties)(CartIcon);
