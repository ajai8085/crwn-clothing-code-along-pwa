import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';
import CartItem from '../cart-item/cart-item.component';
import { withRouter } from 'react-router';
import { selectCartItems } from '../../redux/cart/cart.selectors';
const CartDropdown = ({ cartItems, dispatch, history }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {console.log(cartItems)}
      {cartItems.map((it) => (
        <CartItem key={it.id} item={it} />
      ))}
    </div>
    <CustomButton
      onClick={() => {
        dispatch(toggleCartHidden());
        history.push('/checkout');
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapSateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

// const mapDispatchToProps = (dispatch) => ({
//   removeItem: (id) => dispatch(removeItem(id)),
//   addItem: (item) => dispatch(addItem(item)),
//   toggleCartHidden: () => dispatch(toggleCartHidden()),
// });

export default connect(mapSateToProps)(withRouter(CartDropdown));
