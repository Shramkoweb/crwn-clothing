import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';

import {getCartItems} from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cart-item.component';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {
  CartDropdownButton,
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageContainer,
} from './cart-dropdown.styles';

const CartDropdown = ({cartItems, history, dispatch}) => {
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ?
          cartItems.map((item) => {
            return <CartItem key={item.id} item={item}/>;
          }) :
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>}
      </CartItemsContainer>

      <CartDropdownButton onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}>
        Go to checkout
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};

CartDropdown.propTypes = {
  cartItems: PropTypes.array,
  history: PropTypes.object,
  dispatch: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  cartItems: getCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
