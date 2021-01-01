import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';
import CartItem from '../cart-item/cart-item.component';
import { withRouter } from 'react-router';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

const CartDropdown = ({ cartItems, dispatch, history }) => (
  <div className="cart-dropdown">
    {cartItems && cartItems.length > 0 ? (
      <div className="cart-items">
        {console.log(cartItems)}
        {cartItems.map((it) => (
          <CartItem key={it.id} item={it} />
        ))}
      </div>
    ) : (
      <span className="empty-message">Empty</span>
    )}
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

const mapSateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

// const mapDispatchToProps = (dispatch) => ({
//   removeItem: (id) => dispatch(removeItem(id)),
//   addItem: (item) => dispatch(addItem(item)),
//   toggleCartHidden: () => dispatch(toggleCartHidden()),
// });

export default withRouter(connect(mapSateToProps)(CartDropdown));
