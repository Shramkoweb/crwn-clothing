import React from 'react';
import { connect } from 'react-redux';

import './cart-dropdown.styles.scss';

import { getCartItems } from '../../redux/cart/cart.selectors';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className="cart-items">
        {cartItems.map((item) => {
          return <CartItem key={item.id} item={item}/>;
        })}
      </div>

      <CustomButton>Go to checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: getCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
