import React from 'react';
import { connect } from 'react-redux';

import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = ({ toggleCartHidden, cartItemsAmount }) => {
  return (
    <button type='button' className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>{cartItemsAmount}</span>
    </button>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItemsAmount: cartItems.length
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
