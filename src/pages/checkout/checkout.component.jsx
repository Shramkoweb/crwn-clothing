import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './checkout.styles.scss';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { getCartItems, getCartTotal, } from '../../redux/cart/cart.selectors';
import StripeButton from '../../components/stripe-button/stripe-button.component';

const Checkout = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} checkoutItem={cartItem}/>
    ))}
    <div className='total'>TOTAL: ${total}</div>
    <StripeButton total={total}/>

    <p className='test-warning'>
      * Please use the following test credit card for payments *
    </p>
    <p className='test-warning'>
      4242 4242 4242 4242 -- DATE: Any future date -- CVC: Any 3 digits
    </p>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: getCartItems,
  total: getCartTotal,
});

export default connect(mapStateToProps)(Checkout);
