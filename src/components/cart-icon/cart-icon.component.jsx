import React from 'react';
import { connect } from 'react-redux';

import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = ({ toggleCart }) => {
  return (
    <button type='button' className='cart-icon' onClick={toggleCart}>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>0</span>
    </button>
  );
};


const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
