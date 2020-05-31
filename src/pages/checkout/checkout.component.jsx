import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import {getCartItems, getCartTotal} from '../../redux/cart/cart.selectors';
import StripeButton from '../../components/stripe-button/stripe-button.component';
import {
  CheckoutHeaderContainer,
  CheckoutPageContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer,
} from './checkout.styles';

const Checkout = ({cartItems, total}) => (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {cartItems.map(cartItem => (
          <CheckoutItem key={cartItem.id} checkoutItem={cartItem}/>
      ))}
      <TotalContainer>TOTAL: ${total}</TotalContainer>
      <StripeButton total={total}/>

      <WarningContainer>
        * Please use the following test credit card for payments *
      </WarningContainer>
      <WarningContainer>
        4242 4242 4242 4242 -- DATE: Any future date -- CVC: Any 3 digits
      </WarningContainer>
    </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: getCartItems,
  total: getCartTotal,
});

export default connect(mapStateToProps)(Checkout);
