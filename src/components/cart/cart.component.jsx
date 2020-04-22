import React from 'react';

import './cart.styles.scss';

import CustomButton from '../custom-button/custom-button.component';


const CartDropdown = () => {
  return (
    <div className='cart-dropdown'>
      <div className="cart-items"/>

      <CustomButton>Go to checkout</CustomButton>
    </div>
  );
};

export default CartDropdown;
