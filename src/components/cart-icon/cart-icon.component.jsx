import React from 'react';
import { connect } from 'react-redux';

import './cart-icon.styles.scss';

import { getCartItemsAmount } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = ({ toggleCartHidden, cartItemsAmount }) => {
  return (
    <button type='button' className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>{cartItemsAmount}</span>
    </button>
  );
};

const mapStateToProps = (state) => ({
  cartItemsAmount: getCartItemsAmount(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
