import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getCartItemsAmount } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { CartContainer, ItemCountContainer, ShoppingIcon } from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden, itemsAmount }) => {
  return (
    <CartContainer type='button' onClick={toggleCartHidden}>
      <ShoppingIcon/>
      <ItemCountContainer>{itemsAmount}</ItemCountContainer>
    </CartContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  itemsAmount: getCartItemsAmount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
